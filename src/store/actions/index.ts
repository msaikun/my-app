import axios                   from 'axios';
import { Dispatch }            from 'redux';
import { IContact, IUser }     from '../../app/shared/interfaces';
import {
  GET_USER,
  LOG_IN,
  DELETE_CONTACT_SUCCESSFULLY,
  EDIT_CONTACT_SUCCESSFULLY,
  CREATE_CONTACT_SUCCESSFULLY,
  GET_CONTACTS_SUCCESSFULLY,
}                             from './types';

export const getContactsSuccesfully = (contacts: IContact[]) => ({
  type: GET_CONTACTS_SUCCESSFULLY,
  payload: contacts,
})

export const getContacts = () => (dispatch: Dispatch) =>
  axios
    .get('/api/v1/contacts')
    .then((response) => {
      dispatch(getContactsSuccesfully(response.data))
    })


export const getUser = () => (dispatch: Dispatch) =>
  axios
    .get<IUser[]>('/api/v1/contacts')
    .then((res) => dispatch({ type: GET_USER, payload: res.data }));

export const logIn = (data: IUser) => (dispatch: Dispatch) =>
  axios
    .post<IUser[]>('/api/v1/login', data)
    .then((res) => {
      dispatch({ type: LOG_IN, payload: res.data })
    });

// Написати нормальні логІн та гетЮзер

export const deleteContactSuccessfully = (id: string) => ({
  type: DELETE_CONTACT_SUCCESSFULLY,
  payload: id,
})

export const deleteContact = (id: string) => (dispatch: Dispatch) =>
  axios
    .delete<IUser[]>(`/api/v1/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccessfully(id))
    })


export const editContactSuccesfully = (contact: IContact) => ({
  type: EDIT_CONTACT_SUCCESSFULLY,
  payload: contact,
})

export const editContact = (contact: IContact, id?: string) => (dispatch: Dispatch) =>
  axios
    .put<IUser[]>(`/api/v1/contacts/${id}`, contact)
    .then(() => {
      dispatch(editContactSuccesfully(contact))
    })


export const createContactSuccesfully = (contact: IContact) => ({
  type: CREATE_CONTACT_SUCCESSFULLY,
  payload: contact,
})

export const createContact = (contact: IContact) => (dispatch: Dispatch) => {
  // const id = Date.now().toString();
  const avatar = 'http://placeimg.com/640/480/people';

  return axios
    .post<IUser[]>('/api/v1/contacts', contact)
    .then(() => {
      dispatch(createContactSuccesfully({...contact, avatar}))
    })
}

