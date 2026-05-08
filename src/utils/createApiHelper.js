import React from "react";

const createApiHelper = (status, message) => {
  const error = new Error({});
  error.name = status;
  error.message = message;
  
  return error;
};

export default createApiHelper;
