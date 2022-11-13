import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const globalState = {
  isNameEntered: false,
};
const globalStateContext = React.createContext(globalState);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
