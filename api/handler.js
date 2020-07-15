const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

const uuidv4 = require('uuid').v4;
const _ = require('lodash');

const isValidBody = require('./utils/bodyChecker');

module.exports.get = async (evt) => ({
  statusCode: 200,
  body: JSON.stringify(evt.pathParameters),
});

module.exports.create = async ({ pathParameters, body }) => {
  try {
    body = JSON.parse(body);
  } catch {
    return {
      statusCode: 400,
      body: 'wrong request body type (please use application/json format)',
    };
  }

  // check params
  if (
    !isValidBody(body, 'value') ||
    !isValidBody(pathParameters, 'name')
  ) {
    return {
      statusCode: 400,
      body: 'wrong parameters (please check https://git.io/JJs5T)',
    };
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
      return {
        statusCode: 403,
        body: 'already exists name (change your value name)',
      };
    }
  } catch {
    return {
      statusCode: 500,
      body: 'internal server error, sorry :(',
    };
  }

  // create value
  const key = uuidv4();

  try {
    await db.put({
      TableName: 'valpi-datas',
      Item: {
        name,
        key,
        value,
      },
    }).promise();
  } catch {
    return {
      statusCode: 500,
      body: 'internal server error, sorry :(',
    };
  }

  return {
    statusCode: 200,
    body: `value created :: private key (for update/delete) => ${key}`,
  };
};

module.exports.update = async (evt) => ({
  statusCode: 200,
  body: 'update',
});

module.exports.delete = async (evt) => ({
  statusCode: 200,
  body: 'delete',
});
