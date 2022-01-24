import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { ILoginForm } from "../../shared/interfaces";

export interface ITokens {
  expireDate: Date;
  type: string;
  accessToken: string;
  refreshToken: string;
}

export const signIn = (data: ILoginForm): AxiosResponse<ITokens> | any => {
  const { email, password } = data;

  return axios
    .post<ITokens>("https://61e029ae0f3bdb0017934e25.mockapi.io/api/v1/login", {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem('token', 'true');
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const useSignIn = () => useMutation('SIGN_IN', signIn)
