import React                                from 'react';
import ReactDOM                             from 'react-dom';
import { BrowserRouter }                    from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider }                         from 'react-redux'
import axios                                from 'axios';
import './index.css';
import { MuiThemeProvider }                 from '@material-ui/core';
import { ThemeProvider }                    from 'styled-components';
import reportWebVitals                      from './reportWebVitals';
import { BaseStyles }                       from './app/shared/baseStyle';
import { muiTheme, theme }                  from './app/shared/theme';
import { AppRoutes }                        from './app/AppRoutes';
import store                                from './store';

axios.defaults.baseURL = 'https://61e029ae0f3bdb0017934e25.mockapi.io';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={{ ...muiTheme, ...theme }}>
          <QueryClientProvider client={queryClient}>
            <BaseStyles />
            <BrowserRouter>
              <AppRoutes />
              </BrowserRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
