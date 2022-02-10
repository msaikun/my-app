import { IContactsState, IState }         from '../../app/shared/interfaces';
// import { getAllContacts } from '../actions/filterContactsActions';
import {
  DELETE_CONTACT_SUCCESSFULLY,
  EDIT_CONTACT_SUCCESSFULLY,
  CREATE_CONTACT_SUCCESSFULLY,
  FETCH_CONTACTS_SUCCESSFULLY,
  FILTER_CONTACTS_BY_FAVORITE,
  FILTER_CONTACTS_BY_BLOCKED,
  CONTACTS_WITHOUT_FILTER
}                                         from '../actions/types';

const initialState: IContactsState = {
  contacts: [],
  filterBy: 'all',
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
    case CONTACTS_WITHOUT_FILTER:
      return { ...state, filterBy: 'all' }
    case FILTER_CONTACTS_BY_FAVORITE:
      return { ...state, filterBy: 'favorites' }
    case FILTER_CONTACTS_BY_BLOCKED:
     return { ...state, filterBy: 'blocked' }
      
    default:
      return state;
  }
}

export const selectContacts = (state: IState) => {
  const { contacts, filterBy } = state.contactsReducer;
  if (filterBy === 'all') {
    return contacts;
  } if (filterBy === 'favorites') {
    return contacts.filter(contact => contact.isFavourite);
  } if (filterBy === 'blocked') {
    return contacts.filter(contact => contact.isBlocked);
  }
    return contacts;
}
