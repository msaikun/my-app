import axios          from 'axios';
import { Dispatch }   from 'redux';
import { IUser }      from '../../app/shared/interfaces';
import {
  GET_USER,
  LOG_IN,
}                     from '../types';

export const getUser = () => (dispatch: Dispatch) =>
  axios
    .get<IUser[]>('/api/v1/contacts')
    .then((res) => dispatch({ type: GET_USER, payload: res.data }));

export const logIn = (data: IUser) => (dispatch: Dispatch) =>
  axios
    .post<IUser[]>('/api/v1/login', data)
    .then((res) => {
      dispatch({ type: LOG_IN, payload: res.data })
    });

// Написати нормальні логІн та гетЮзер
