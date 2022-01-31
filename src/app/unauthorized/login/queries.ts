import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { IAuthResponse, ILoginForm, ITokens, IUser } from '../../shared/interfaces';

const tokenType = 'Bearer';

export const setAuthorizationToken = (tokens?: ITokens): Promise<ITokens | undefined> => new Promise((resolve) => {
  if (tokens) {
    const storedToken = localStorage.authToken && JSON.parse(localStorage.authToken);
    const prevAccessToken = storedToken?.accessToken;
    const nextAccessToken = tokens?.accessToken;

    if (prevAccessToken !== nextAccessToken) {
      localStorage.setItem('authToken', JSON.stringify(tokens));
    }

    axios.defaults.headers.common.authorization = `${tokenType} ${nextAccessToken}`;
  } else {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common.authorization;
  }

  setTimeout(() => {
    resolve(tokens);
  }, 300);
});

export const setUserDetails = (user?: IUser) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
}

export const logout = (): void => {
  setUserDetails();
  setAuthorizationToken();
  window.location.href = '/';
};

export const signIn = (data: ILoginForm) => axios.post<IAuthResponse>('/api/v1/login', data)
  .then((response: AxiosResponse<IAuthResponse>) => {
    setUserDetails(response?.data?.user);
    setAuthorizationToken(response?.data?.tokens);

    return response;
  })

export const useSignIn = () => useMutation('SIGN_IN', signIn)
