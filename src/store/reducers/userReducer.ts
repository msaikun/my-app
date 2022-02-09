import { IUserState, IUserStates }         from '../../app/shared/interfaces';
import { FETCH_USER_SUCCESSFULLY }         from '../actions/types';

const initialState: IUserState = {
  user: {},
  tokens: {},
};

// eslint-disable-next-line default-param-last
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_SUCCESSFULLY:
      return { ...state, user: action.payload.user, tokens: action.payload.tokens };
    default:
      return state;
  }
}

export const selectUser = (state: IUserStates) => state.userReducer.user;
