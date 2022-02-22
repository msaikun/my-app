import axios                                         from 'axios';
import { all, call, put, takeLatest }                from 'redux-saga/effects';
import {
  contactsLoader,
  createContact,
  createContactFailure,
  createContactSuccesfully,
  deleteContact,
  deleteContactFailure,
  deleteContactSuccessfully,
  editContact,
  editContactFailure,
  editContactSuccesfully,
  fetchContactsFailure,
  fetchContactsSuccesfully
}                                                    from '../actions/contactsActions';
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  FETCH_CONTACTS,
}                                                    from '../actions/types';

function* fetchContactsSaga(): any {
  // yield contactsLoader(true);

  try {
    const response: { data: any } = yield call(axios.get, '/api/v1/contacts');

    yield put(
      fetchContactsSuccesfully(response.data)
    ); 
    yield put(
      contactsLoader(false)
    )
  } catch (event: any) {
    yield put(
      fetchContactsFailure(event.message)
    )
    yield put(
      contactsLoader(false)
    )
  }
}

export function* contactSaga() {
  yield all([takeLatest(FETCH_CONTACTS, fetchContactsSaga)])
}

function* contactDeleteSaga(action: ReturnType<typeof deleteContact>): any {
  try {
    const id = action.payload;
    const response = yield call(axios.delete, `/api/v1/contacts/${id}`);
    yield put(
      deleteContactSuccessfully(response.data.id)
    );
  } catch (event: any) {
    yield put(
      deleteContactFailure(event.message)
    )
  }
}

export function* deleteContactSaga() {
  yield all([takeLatest(DELETE_CONTACT, contactDeleteSaga)])
}

function* contactEditSaga(action: ReturnType<typeof editContact>): any {
  try {
    const requestData = action.payload;
    const response = yield call(axios.put, `/api/v1/contacts/${requestData.id}`, requestData.contact);
    yield put(
      editContactSuccesfully(response.data)
    );
  } catch (event: any) {
    yield put(
      editContactFailure(event.message)
    )
  }
}

export function* editContactSaga() {
  yield all([takeLatest(EDIT_CONTACT, contactEditSaga)])
}

function* contactCreateSaga(action: ReturnType<typeof createContact>): any {
  try {
    const requestData = action.payload;
    const response = yield call(axios.post, '/api/v1/contacts', requestData);
    yield put(
      createContactSuccesfully(response.data)
    );
  } catch (event: any) {
    yield put(
      createContactFailure(event.message)
    )
  }
}

export function* createContactSaga() {
  yield all([takeLatest(CREATE_CONTACT, contactCreateSaga)])
}
