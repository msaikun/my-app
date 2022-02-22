import { IContact }              from '../../app/shared/interfaces';
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
  FILTER_CONTACTS_BY,
  SORT_CONTACTS_BY,
}                               from './types';

export const fetchContactsSuccesfully = (contacts: IContact[]) => ({
  type: FETCH_CONTACTS_SUCCESSFULLY,
  payload: contacts,
})

export const fetchContactsFailure = (error: any) => ({
  type: FETCH_CONTACTS_FAILURE,
  error,
})

export const fetchContacts = () => ({
  type: FETCH_CONTACTS,
})


export const deleteContactSuccessfully = (id: string) => ({
  type: DELETE_CONTACT_SUCCESSFULLY,
  payload: id,
})

export const deleteContactFailure = (error: any) => ({
  type: DELETE_CONTACT_FAILURE,
  error,
})

export const deleteContact = (id: string) => ({
  type: DELETE_CONTACT,
  payload: id,
})


export const editContactSuccesfully = (contact: IContact) => ({
  type: EDIT_CONTACT_SUCCESSFULLY,
  payload: contact,
})

export const editContactFailure = (error: any) => ({
  type: EDIT_CONTACT_FAILURE,
  error
})

export const editContact = (contact: IContact, id?: string) => ({
  type: EDIT_CONTACT,
  payload: {contact, id},
})


export const createContactSuccesfully = (contact: IContact) => ({
  type: CREATE_CONTACT_SUCCESSFULLY,
  payload: contact,
})

export const createContactFailure = (error: any) => ({
  type: CREATE_CONTACT_FAILURE,
  error,
})

export const createContact = (contact: IContact) => ({
  type: CREATE_CONTACT,
  payload: contact,
})


export const setContactsFilter = (filterBy: string) => ({
  type: FILTER_CONTACTS_BY,
  payload: filterBy,
})

export const setContactsSort = (sortBy: string) => ({
  type: SORT_CONTACTS_BY,
  payload: sortBy,
})
