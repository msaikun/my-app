import { IContactsState } from '../../app/shared/interfaces';
import { CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACTS } from '../actions/types';

const initialState: IContactsState = {
  contacts: []
};

// eslint-disable-next-line default-param-last
function contactsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case CREATE_CONTACT:
      return { ...state, contacts: action.payload };
    case DELETE_CONTACT:
      return { ...state, contacts: state.contacts.filter(contact => contact !== action.payload) };
    case EDIT_CONTACT:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}

export default contactsReducer;
