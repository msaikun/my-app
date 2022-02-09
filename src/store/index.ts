import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
}                                from 'redux';
import thunkMiddleware           from 'redux-thunk';
import { contactsReducer }       from './reducers/contactsReducer';
import { filterContactsReducer } from './reducers/filterContactsReducer';
import { userReducer }           from './reducers/userReducer';
import { loggerMiddleware }      from './middlewares/loggerMiddleware';

const rootReducer = combineReducers({
  contactsReducer,
  userReducer,
  filterContactsReducer
});

const middlewareList = [thunkMiddleware, loggerMiddleware]

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewareList))
);

export default store;
