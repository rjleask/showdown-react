import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/game" component={Game} />
    </div>
  </Router>
);

export default App;
