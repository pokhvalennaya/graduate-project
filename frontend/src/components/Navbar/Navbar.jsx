import React from "react";
import "./Navbar.scss";
// import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <React.Fragment>
    //       <Route>
    <div>
      <nav>
        <div class="nav-wrapper navbar blue">
          <a href="/" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Головна</a>
            </li>
            <li>
              <a href="badges.html">Про нас</a>
            </li>
            <li>
              <a href="/login">Особистий кабінет</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    //       </Route>
    //     </React.Fragment>
    //   </Switch>
    // </BrowserRouter>
  );
};

export default Navbar;
