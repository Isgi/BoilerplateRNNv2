import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import settingsReducer from './settingsReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  form: formReducer,
  settings: settingsReducer,
  auth: authReducer
});

export default appReducer;
