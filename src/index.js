import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";

import { store } from "../src/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7E549F",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
