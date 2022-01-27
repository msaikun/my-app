export interface ILoginForm {
  email: string;
  password: string;
}

export interface ITokens {
  expireDate: Date;
  type: string;
  accessToken: string;
  refreshToken: string;
}

export interface IContact {
  id: string;
  createdAt?: Date;
  firstName: string;
  phone: string;
  lastName: string;
  avatar?: string;
  description: string;
  isFavourite?: boolean;
  isBlocked?: boolean;
  email?: string;
}
