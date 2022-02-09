import { IContactsState }         from '../../app/shared/interfaces';
import {
  DELETE_CONTACT_SUCCESSFULLY,
  EDIT_CONTACT_SUCCESSFULLY,
  CREATE_CONTACT_SUCCESSFULLY,
  GET_CONTACTS_SUCCESSFULLY
}                                 from '../types';

const initialState: IContactsState = {
  contacts: []
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
    case GET_CONTACTS_SUCCESSFULLY:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}
