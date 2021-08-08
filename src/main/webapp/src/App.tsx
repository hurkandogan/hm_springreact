import React, {useEffect} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { PrivateRoute } from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import TopNav from "./components/shared/TopNav";
import Sidebar from "./components/shared/Sidebar";
import Dashboard from "./components/content/Dashboard";
import Artwork from "./components/artwork/Artwork";
import Location from "./components/location/Location";

import { AppState } from './redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import { loadLocations } from './redux/actions/locationsAction';

function App() {

    const user = useSelector((state: AppState) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
        dispatch(loadLocations());
    }, [])

    return (
        <Router>
            <div>
                { user.token && <TopNav /> }
                { user.token && <Sidebar /> }
                
                <div className="switch-wrapper">
                    <Switch>
                        <Route exact path={'/login'} component={Login} />
                        
                        <PrivateRoute exact path={"/"}>
                            <Dashboard />    
                        </PrivateRoute>

                        <PrivateRoute path={'/artwork'}>
                            <Artwork />
                        </PrivateRoute>
                        <PrivateRoute path={'/location/:locationId'}>
                            <Location />
                        </PrivateRoute>
                    </Switch>
                </div> 
            </div> 
        </Router>
    );
}
export default App;