import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";

function Navbar() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/register">
                        <RegisterScreen />
                    </Route>
                    <Route path="login">
                    <LoginScreen />
                </Route>

                </Switch>
            </div>
        </Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Online Tickets</a>


            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Events <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My Tickets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login/Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
