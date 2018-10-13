import { createStore, applyMiddleware } from 'redux';
import { persistReducer, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native

import middleware from './middleware';
import appReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['setting']
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT') { // action type LOGOUT for remove all persist data
    purgeStoredState(persistConfig);
    newState = undefined;
  }
  return persistedReducer(newState, action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
