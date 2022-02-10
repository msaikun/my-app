export interface ILoginForm {
  email: string;
  password: string;
}

export interface IUser {
  id?: string;
  email?: string;
  role?: string;
  accountType?: string;
  firstName?: string;
  lastName?: string;
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

export interface IAuthResponse {
  user: IUser;
  tokens: ITokens;
}

export interface IContactsState {
  contacts: IContact[];
  filterBy: string;
}

export interface IState {
  contactsReducer: IContactsState;
}

export interface IUserState {
  user: IUser | any;
  tokens: ITokens | any;
}

export interface IUserStates {
  userReducer: IUserState;
}
