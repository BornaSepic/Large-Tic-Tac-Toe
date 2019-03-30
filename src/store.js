import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import loggerMiddleware from './middleware/logger';

export default function configureStore(preloadedState) {
  const middleware = [loggerMiddleware];
  const middlewareEnhancers = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducers, preloadedState, composedEnhancers);
  return store;
}
