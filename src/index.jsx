/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "react-auth-kit";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <AuthProvider authType={"cookie"} authName={"_auth"}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </Router>
  // </React.StrictMode>
);
