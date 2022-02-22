import ReactDOM                             from 'react-dom';
import { BrowserRouter }                    from 'react-router-dom';
import { Provider }                         from 'react-redux'
import { PersistGate }                      from 'redux-persist/integration/react';
import axios                                from 'axios';
import './index.css';
import { MuiThemeProvider }                 from '@material-ui/core';
import { ThemeProvider }                    from 'styled-components';
import { BaseStyles }                       from './app/shared/baseStyle';
import { muiTheme, theme }                  from './app/shared/theme';
import { AppRoutes }                        from './app/AppRoutes';
import store, { persistor }                 from './store';

axios.defaults.baseURL = 'https://61e029ae0f3bdb0017934e25.mockapi.io';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={{ ...muiTheme, ...theme }}>
          <BaseStyles />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
