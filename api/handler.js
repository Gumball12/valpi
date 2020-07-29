const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

const uuidv4 = require('uuid').v4;
const _ = require('lodash');

const isValidBody = require('./utils/bodyChecker');
const respGen = require('./utils/responseGenerator');

const resp = {
  '200-create': (key) => respGen(200, `value created :: private key (for update/delete) => ${key}`),
  '200-get': (data) => respGen(200, data),
  '400-param': respGen(400, 'wrong parameters (please check https://git.io/JJs5T)'),
  '400-body-type': respGen(400, 'wrong request body type (please use application/json format)'),
  '403-exists-name': respGen(403, 'already exists name (change your value name)'),
  '403-no-exists-name': respGen(403, 'value not exists (change your value name)'),
  '403-wrong-key': respGen(403, 'wrong private key'),
  '500-ise': respGen(500, 'internal server error, sorry :('),
};

module.exports.get = async ({ pathParameters }) => {
  // check param
  if (!isValidBody(pathParameters, 'name')) {
    return resp['400-param'];
  }

  // get param value
  const { name } = pathParameters;

  // get value
  try {
    const data = await db.get({
      TableName: 'valpi-datas',
      Key: { name },
    }).promise();

    if (_.isEmpty(data.Item)) {
      return resp['403-no-exists-name']; // empty
    } else {
      return resp['200-get'](data.Item.value);
    }
  } catch {
    return resp['500-ise'];
  }
};

module.exports.create = async ({ pathParameters, body }) => {
  try {
    body = JSON.parse(body);
  } catch {
    return resp['400-body-type'];
  }

  // check params
  if (
    !isValidBody(body, 'value') ||
    !isValidBody(pathParameters, 'name')
  ) {
    return resp['400-param'];
  }

  // get param values
  const { name } = pathParameters;
  const { value } = body;

  try {
    // check name
    const isAlreadyExists = !_.isEmpty(await db.get({
      TableName: 'valpi-datas',
      Key: { name },
    }).promise());

    if (isAlreadyExists) {
      return resp['403-exists-name'];
    }
  } catch {
    return resp['500-ise'];
  }

  // create value
  const key = uuidv4();

  try {
    await db.put({
      TableName: 'valpi-datas',
      Item: {
        name,
        key,
        value: JSON.stringify(value),
      },
    }).promise();
  } catch {
    return resp['500-ise'];
  }

  return resp['200-create'](key);
};

module.exports.update = async ({ pathParameters, body }) => {
  try {
    body = JSON.parse(body);
  } catch {
    return resp['400-body-type'];
  }

  // check params
  if (
    !isValidBody(body, ['value', 'key']) ||
    !isValidBody(pathParameters, 'name')
  ) {
    return resp['400-param'];
  }

  // get param value
  const { name } = pathParameters;
  const { value, key } = body;

  try {
    // get data
    const data = await db.get({
      TableName: 'valpi-datas',
      Key: { name },
    }).promise();

    // check value data exists
    if (_.isEmpty(data)) {
      return resp['403-no-exists-name'];
    }

    // check key
    if (data.Item.key !== key) {
      return resp['403-wrong-key'];
    }

    // update value
    await db.update({
      TableName: 'valpi-datas',
      Key: { name },
      UpdateExpression: 'set #v = :v',
      ExpressionAttributeNames: { '#v': 'value' },
      ExpressionAttributeValues: { ':v': JSON.stringify(value) },
    }).promise();
  } catch {
    return resp['500-ise'];
  }

  return resp['200-get'](JSON.stringify(value));
};

module.exports.delete = async ({ pathParameters, body }) => {
  try {
    body = JSON.parse(body);
  } catch {
    return resp['400-body-type'];
  }

  // check params
  if (
    !isValidBody(body, 'key') ||
    !isValidBody(pathParameters, 'name')
  ) {
    return resp['400-param'];
  }

  // get param value
  const { name } = pathParameters;
  const { key } = body;

  try {
    // get data
    const data = await db.get({
      TableName: 'valpi-datas',
      Key: { name },
    }).promise();

    // check value data exists
    if (_.isEmpty(data)) {
      return resp['403-no-exists-name'];
    }

    // check key
    if (data.Item.key !== key) {
      return resp['403-wrong-key'];
    }

    // delete value
    await db.delete({
      TableName: 'valpi-datas',
      Key: { name },
    }).promise();
  } catch {
    return resp['500-ise'];
  }

  return resp['200-get'](`delete '${name}'`);
};
