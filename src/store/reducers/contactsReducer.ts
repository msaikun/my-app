import { IContact, IContactsState, IState } from '../../app/shared/interfaces';
import { Filter, Sort }                     from '../../app/shared/enums';
import {
  DELETE_CONTACT_SUCCESSFULLY,
  EDIT_CONTACT_SUCCESSFULLY,
  CREATE_CONTACT_SUCCESSFULLY,
  FETCH_CONTACTS_SUCCESSFULLY,
  FILTER_CONTACTS_BY,
  SORT_CONTACTS_BY,
}                                           from '../actions/types';

const initialState: IContactsState = {
  contacts: [],
  filterBy: Filter.All,
  sortBy: Sort.None,
};

// eslint-disable-next-line default-param-last
export const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DELETE_CONTACT_SUCCESSFULLY:
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
    case EDIT_CONTACT_SUCCESSFULLY:
      return { ...state, contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact) };
    case CREATE_CONTACT_SUCCESSFULLY:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case FETCH_CONTACTS_SUCCESSFULLY:
      return { ...state, contacts: action.payload };
    case FILTER_CONTACTS_BY:
      return { ...state, filterBy: action.payload };
    case SORT_CONTACTS_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}

export const selectContacts = (state: IState) => {
  const { contacts, filterBy, sortBy } = state.contactsReducer;
  let selectedContacts: IContact[] = [];

  if (filterBy === Filter.All) {
    selectedContacts = contacts;
  } if (filterBy === Filter.Favourites) {
    selectedContacts = contacts.filter(contact => contact.isFavourite);
  } if (filterBy === Filter.Blocked) {
    selectedContacts = contacts.filter(contact => contact.isBlocked);
  } 
  
  if (sortBy === Sort.None) {
    selectedContacts = selectedContacts.length ? selectedContacts : contacts;
  } if (sortBy === Sort.ByFirstName) {
    selectedContacts = selectedContacts.length 
      ? selectedContacts.sort((a, b) => a.firstName.localeCompare(b.firstName)) : contacts;
  } if (sortBy === Sort.ByLastName) {
    selectedContacts = selectedContacts.length 
      ? selectedContacts.sort((a, b) => a.lastName.localeCompare(b.lastName)) : contacts;
  }

  return selectedContacts;
}
