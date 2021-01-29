import React from "react";
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
import { AuthorVinyls } from "./components/AuthorVinyls"
import { GenreVinyls } from "./components/GenreVinyls"
import "./styles.css";

// App's root element
const rootElement = document.getElementById("root");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/genres/:id/vinyls" children={<GenreVinyls />} />
        <Route path="/authors/:id/vinyls" children={<AuthorVinyls />} />
        <Route path="/vinyls/:id" children={<Vinyl />} />
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
