export const GET_CONTACTS = 'GET_CONTACTS';

// eslint-disable-next-line default-param-last
export const contactsReducer = (state = [], action: any) => {
  switch (action.type) {
    case GET_CONTACTS:
      return [
        ...state,
        action
      ]
    default:
      return state
  }
}
