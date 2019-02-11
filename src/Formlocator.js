import React, { Component } from "react";
import {BrowserRouter as Router,Switch, Route, NavLink } from "react-router-dom";
import FAQ from "./FAQ's"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"


class Formlocator extends Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>Reague of Rendering</h1>
                    <ul className = "Nav">
                        <li><NavLink exact to ="/">Home</NavLink></li>
                        <li><NavLink to ="/Login">Login</NavLink></li>
                        <li><NavLink to ="/Register">Register</NavLink></li>
                        <li><NavLink to ="/FAQ">FAQ</NavLink></li>
                    </ul>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/FAQ" component={FAQ}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Formlocator;
