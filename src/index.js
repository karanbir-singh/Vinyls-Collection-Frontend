// Copyright © 2020 Singh Karanbir. All rights riserved.

import React, { useReducer, createContext } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthorsList } from "./components/AuthorsList";
import { GenresList } from "./components/GenresList";
import { Home } from "./components/Home";
import { Vinyl } from "./components/Vinyl";
import { VinylsList } from "./components/VinylsList";
import "./styles.css";

// App's root element
const rootElement = document.getElementById("root");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/vinyls/:id">
          <Vinyl />
        </Route>
        <Route path="/vinyls">
          <VinylsList />
        </Route>
        <Route path="/authors">
          <AuthorsList />
        </Route>
        <Route path="/genres">
          <GenresList />
        </Route>
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
