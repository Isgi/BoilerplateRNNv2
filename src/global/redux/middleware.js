import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const middleware = [];

// middleware redux promise
const promise = promiseMiddleware();
middleware.push(promise);

// middleware logger
const logger = createLogger();
middleware.push(logger);

export default middleware;
