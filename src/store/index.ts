import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware                                            from 'redux-thunk';
import contactsReducer                                            from './reducers/contactsReducer';
import { userReducer }                                            from './reducers/userReducer';

const rootReducer = combineReducers({
  contactsReducer,
  userReducer,
});

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
