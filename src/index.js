/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./views/Login"
import Signup from "./views/Signup"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
  
      <Route
        path="/login"
        exact
        render={props => <Login {...props} />}
      />
      <Route
        path="/signup"
        exact
        render={props => <Signup {...props} />}
      />
     


      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
