import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { NAVBUTTON_ACTIVE, NAVBUTTON_DEACTIVE } from '../layout/navbutton-layout';
import Home from './Home';
import Info from './Info';
import Instruments from './Instruments';


const AppRouter = (props) => {

    const [actualPage, setActualPage] = useState(null);

    const handleNavClick = (pageValue) => {
        setActualPage(pageValue);
    }

    return(
    <Router basename="/lims">
        <div className="w-full">
            <nav className="py-3">
                <ul className="flex space-x-4 shadow-md bg-gray-800 py-3">
                    <li>
                        <img src="/images/lims_small_logo.png" height="100" width="100"/>
                    </li>
                    <li className={actualPage === 'home' ? NAVBUTTON_ACTIVE : NAVBUTTON_DEACTIVE}>
                        <Link to="/" onClick={e => handleNavClick('home')} >Home</Link>
                    </li>
                    <li className={actualPage === 'instruments' ? NAVBUTTON_ACTIVE : NAVBUTTON_DEACTIVE}>
                        <Link to="/instruments" onClick={e => handleNavClick('instruments')} >Prüfmittel</Link>
                    </li>
                    <li className={actualPage === 'info' ? NAVBUTTON_ACTIVE : NAVBUTTON_DEACTIVE}>
                        <Link to="/info" onClick={e => handleNavClick('info')} >Info</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/info">
                    <Info />
                </Route>
                <Route path="/instruments">
                    <Instruments />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}

export default AppRouter;