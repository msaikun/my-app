import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
}                                       from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import createSagaMiddleware             from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { all, fork }                          from 'redux-saga/effects';
import storage                          from 'redux-persist/lib/storage';
import { contactsReducer }              from './reducers/contactsReducer';
import { userReducer }                  from './reducers/userReducer';
import { loggerMiddleware }             from './middlewares/loggerMiddleware';
import { userSaga }                     from './sagas/userSaga';
import {
  contactSaga,
  createContactSaga,
  deleteContactSaga,
  editContactSaga,
}                                       from './sagas/contactsSaga';

const rootReducer = combineReducers({
  contactsReducer,
  userReducer,
});

export function* rootSaga() {
  yield all([fork(userSaga), fork(contactSaga), fork(deleteContactSaga), fork(createContactSaga), fork(editContactSaga)])
}

const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareList = [thunkMiddleware, sagaMiddleware, loggerMiddleware];
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewareList))
);

export const persistor = persistStore(store);
export default store;

sagaMiddleware.run(rootSaga);
