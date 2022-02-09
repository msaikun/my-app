import { IUserState }         from '../../app/shared/interfaces';
import { GET_USER }           from '../Actions/types';

const initialState: IUserState = {
  user: {},
};

// eslint-disable-next-line default-param-last
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
