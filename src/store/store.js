import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { registrationReducer } from './registrationReducer';

const rootReducer = combineReducers({
  form: formReducer,
  registration: registrationReducer,
});

export default createStore(rootReducer);
