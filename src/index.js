// Copyright © 2020 Singh Karanbir. All rights riserved.

import React, { useReducer, createContext } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./components/Home";
import "./styles.css";

// App's root element
const rootElement = document.getElementById("root");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
