import { createMuiTheme } from "@material-ui/core";

export const muiTheme = createMuiTheme();

export type TThemeColor =
  | 'primary'
  | 'primaryDark'
  | 'secondary'
  | 'action'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'info'
  | 'attention'
  | 'success'
  | 'white'
  | 'black'
  | 'grey'
  | 'lightGrey'
  | 'darkGrey';
  
export interface ITheme {
  colors: {
    [key in TThemeColor]: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary    : '#6f90d9',
    primaryDark: '#134269',
    secondary  : '#6f90d9',
    action     : '#69818b',
    disabled   : '#606060',
    error      : '#f44336',
    warning    : '#e4572e',
    info       : '#2c3f69',
    attention  : '#fac05e',
    success    : '#55bd59',
    black      : '#272932',
    white      : '#ffffff',
    grey       : '#ebf1f6',
    lightGrey  : '#f7fafd',
    darkGrey   : '#8d91a5',
  },
};
