import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import MyTicketsScreen from "./MyTicketsScreen";
import EventsListScreen from "./EventsListScreen";
import AddEventScreen from "./AddEventScreen";

function Navbar() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to={"/events"}>Online Tickets</Link>


                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/events">Wydarzenia</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/tickets">Moje bilety</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Logowanie</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/register">Rejestracja</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/addEvent">Dodaj Wydarzenie</Link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path={"/events"}>
                        <EventsListScreen/>
                    </Route>
                    <Route path="/register">
                        <RegisterScreen />
                    </Route>
                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                    <Route path="/tickets">
                        <MyTicketsScreen/>
                    </Route>
                    <Route path="/addEvent">
                        <AddEventScreen/>
                    </Route>
                    <Route path={"/"}>
                        <EventsListScreen/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Navbar;
