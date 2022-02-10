import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
}                                       from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage                          from 'redux-persist/lib/storage';
import { contactsReducer }              from './reducers/contactsReducer';
import { userReducer }                  from './reducers/userReducer';
import { loggerMiddleware }             from './middlewares/loggerMiddleware';

const rootReducer = combineReducers({
  contactsReducer,
  userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareList = [thunkMiddleware, loggerMiddleware];
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewareList))
);

export const persistor = persistStore(store);
export default store;
