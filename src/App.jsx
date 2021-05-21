import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login/Login'
import Register from './Components/Auth/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
