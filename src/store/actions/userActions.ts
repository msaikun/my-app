import { ILoginForm, IUserState }                from '../../app/shared/interfaces';
import {
  FETCH_USER,
  FETCH_USER_SUCCESSFULLY,
  FETCH_USER_FAILURE,
}                                                from './types';

export const loginSuccesfully = (data: IUserState) => ({
  type: FETCH_USER_SUCCESSFULLY,
  payload: data,
})

export const loginFailure = (error: any) => ({
  type: FETCH_USER_FAILURE,
  error,
})

export const login = (data: ILoginForm) => ({
  type: FETCH_USER,
  payload: data,
})
