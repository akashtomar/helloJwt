const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: 'MySec',
    userProperty: 'payloadData',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'MySec',
    userProperty: 'payloadData',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;