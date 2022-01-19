import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthRoutes } from "./app/authorized/AuthorizedRoutes";
import { MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { muiTheme, theme } from "./shared/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={{ ...muiTheme, ...theme }}>
          {/* <QueryClientProvider client={queryClient}> */}
            <AuthRoutes />
            <App />
          {/* </QueryClientProvider> */}
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
