import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import "./assets/styles/index.scss";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
      dark: "#ccc",
      light: "#fff",
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
