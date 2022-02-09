import {
  FILTER_CONTACTS_BY_BLOCKED, 
  FILTER_CONTACTS_BY_FAVORITE,
  FETCH_CONTACTS
}                               from './types';

export const getFavoriteContacts = () => ({
  type: FILTER_CONTACTS_BY_FAVORITE
})

export const getBlockedContacts = () => ({
  type: FILTER_CONTACTS_BY_BLOCKED
})

export const getAllContacts = () => ({
  type: FETCH_CONTACTS
})
