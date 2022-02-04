import axios                                   from 'axios';
import { Dispatch }                            from 'redux';
import { IContact, IUser }                     from '../../app/shared/interfaces';
import { GET_CONTACTS, GET_USER, LOG_IN }      from './types';

export const getContacts = () => (dispatch: Dispatch) =>
  axios
    .get<IContact[]>('/api/v1/contacts')
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }));

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

export const deleteContact = (id: string) => () =>
  axios
    .delete<IUser[]>(`/api/v1/contacts/${id}`)

export const editContact = (data: IContact, id: any) => () =>
  axios
    .put<IUser[]>(`/api/v1/contacts/${id}`, data)

export const createContact = (data: IContact) => () =>
  axios
    .post<IUser[]>('/api/v1/contacts', data)
