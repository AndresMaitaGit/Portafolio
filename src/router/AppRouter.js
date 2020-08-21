import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { MainHome } from '../MainHome';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                    <Navbar />
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route exact path="/" component={MainHome} />
                    <Route exact path="/" component={MainHome} />
                    <Redirect to="/" />
                </Switch>

                
            </div>
        </Router>
    )
}
