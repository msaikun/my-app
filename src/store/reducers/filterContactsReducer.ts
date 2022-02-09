import { IContactsState }         from '../../app/shared/interfaces';
import {
  FILTER_CONTACTS_BY_FAVORITE,
  FILTER_CONTACTS_BY_BLOCKED 
}                                 from '../actions/types';

const initialState: IContactsState = {
  contacts: []
};

// eslint-disable-next-line default-param-last
export const filterContactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FILTER_CONTACTS_BY_FAVORITE:
      return { ...state, contacts: state.contacts.filter(contact => contact.isFavourite) };
    case FILTER_CONTACTS_BY_BLOCKED:
      return { ...state, contacts: state.contacts.filter(contact => contact.isBlocked) };
    default:
      return state;
  }
}

