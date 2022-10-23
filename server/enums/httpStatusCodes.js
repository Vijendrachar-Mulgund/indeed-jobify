const httpStatusCode = Object.freeze({
  // Successful responses
  success: 200,
  created: 201,
  accepted: 202,
  nonAuthoritativeInformation: 203,
  noContent: 204,
  resetContent: 205,

  // Redirection responses
  multipleChoices: 300,
  found: 302,

  // Client error responses
  badRequest: 400,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
  requestTimedOut: 408,

  // Server error responses
  internalServerError: 500,
  notImplemented: 501,
  badGateway: 502,
  gatewayTimedOut: 504,
});

export default httpStatusCode;
