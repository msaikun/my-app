import axios, { AxiosResponse } from 'axios';
import { useMutation }          from 'react-query';
import { ILoginForm, ITokens }  from '../../shared/interfaces';

export const signIn = (data: ILoginForm): AxiosResponse<ITokens> | any => axios.post<ITokens>('/api/v1/login', {data})
  .then((response) => {
    localStorage.setItem('token', 'true');
    return response;
  })

export const useSignIn = () => useMutation('SIGN_IN', signIn)
