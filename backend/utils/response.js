exports.genrateResponse = (message, data = null, error = null) => {
  return {
    message,
    data,
    error,
  };
};
