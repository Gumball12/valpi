module.exports.get = async (evt) => ({
  statusCode: 200,
  body: JSON.stringify(evt.pathParameters),
});

module.exports.create = async (evt) => ({
  statusCode: 200,
  body: 'create',
});

module.exports.update = async (evt) => ({
  statusCode: 200,
  body: 'update',
});

module.exports.delete = async (evt) => ({
  statusCode: 200,
  body: 'delete',
});
