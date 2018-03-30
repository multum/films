const logMiddleware = store => next => action => {
  console.debug(action);
  return next(action);
};

export default {
  logMiddleware
};