import axios                     from 'axios';
import { Dispatch }              from 'redux';
import { IContact, IUser }       from '../../app/shared/interfaces';
import {
  DELETE_CONTACT_SUCCESSFULLY,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT,
  EDIT_CONTACT_SUCCESSFULLY,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT,
  CREATE_CONTACT_SUCCESSFULLY,
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT,
  FETCH_CONTACTS_SUCCESSFULLY,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS,
}                               from './types';

export const fetchContactsSuccesfully = (contacts: IContact[]) => ({
  type: FETCH_CONTACTS_SUCCESSFULLY,
  payload: contacts,
})

export const fetchContactsFailure = (error: any) => ({
  type: FETCH_CONTACTS_FAILURE,
  error,
})

export const fetchContacts = () => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CONTACTS })

  return axios
    .get('/api/v1/contacts')
    .then((response) => {
      dispatch(fetchContactsSuccesfully(response.data))
    })
    .catch(() => {
      dispatch(fetchContactsFailure(null))
    })
}



export const deleteContactSuccessfully = (id: string) => ({
  type: DELETE_CONTACT_SUCCESSFULLY,
  payload: id,
})

export const deleteContactFailure = (error: any) => ({
  type: DELETE_CONTACT_FAILURE,
  error,
})

export const deleteContact = (id: string) => (dispatch: Dispatch) => {
  dispatch({ type: DELETE_CONTACT })

  return axios
    .delete<IUser[]>(`/api/v1/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccessfully(id))
    })
    .catch(() => {
      dispatch(deleteContactFailure(null))
    })
}


export const editContactSuccesfully = (contact: IContact) => ({
  type: EDIT_CONTACT_SUCCESSFULLY,
  payload: contact,
})

export const editContactFailure = (error: any) => ({
  type: EDIT_CONTACT_FAILURE,
  error
})

export const editContact = (contact: IContact, id?: string) => (dispatch: Dispatch) => {
  dispatch({ type: EDIT_CONTACT })

  return axios
    .put<IUser[]>(`/api/v1/contacts/${id}`, contact)
    .then(() => {
      dispatch(editContactSuccesfully(contact))
    })
    .catch(() => {
      dispatch(editContactFailure(null))
    })
}


export const createContactSuccesfully = (contact: IContact) => ({
  type: CREATE_CONTACT_SUCCESSFULLY,
  payload: contact,
})

export const createContactFailure = (error: any) => ({
  type: CREATE_CONTACT_FAILURE,
  error,
})

export const createContact = (contact: IContact) => (dispatch: Dispatch) => {
  dispatch({ type: CREATE_CONTACT })

  return axios
    .post<IContact>('/api/v1/contacts', contact)
    .then((response) => {
      dispatch(createContactSuccesfully(response.data))
    })
    .catch(() => {
      dispatch(createContactFailure(null))
    })
}
