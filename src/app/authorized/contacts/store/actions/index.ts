import { IContact }               from "../../../../shared/interfaces";
import { GET_CONTACTS }           from "../reducers/contactsReducer";
import axios    from 'axios';

// export const getContacts = (data: IContact[]) => ({
//   type: GET_CONTACTS,
//   data
// })

export const getContacts = (data: IContact[]) => ({
  return dispatch => {
    axios.get<IContact[]>('/api/v1/contacts')
      .then((response) => {const contacts = response.data;
      dispatch({
        type: GET_CONTACTS,
        data,
      })
    }
  },
})
