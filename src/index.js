// Copyright © 2020 Singh Karanbir. All rights riserved.

import React, { useReducer, createContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// App's root element
const rootElement = document.getElementById("root");

function App() {
  return (
    <h1>It works!</h1>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
