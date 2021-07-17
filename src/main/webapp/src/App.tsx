import React, {useEffect} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Components
import { PrivateRoute } from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import TopNav from "./components/shared/TopNav";
import Sidebar from "./components/shared/Sidebar";
import Dashboard from "./components/content/Dashboard";
import Artwork from "./components/artwork/Artwork";

import { useAppSelector, useAppDispatch } from './redux/hooks';
import { loadUser } from './redux/actions/user';

function App() {

    const loggedUser = useAppSelector(state => state.loggedUser.loggedUser);
    const dispatch = useAppDispatch();

    
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch])

    return (
        <Router>
            <div>
                { loggedUser.token && <TopNav /> }
                { loggedUser.token && < Sidebar /> }
                
                <div className="switch-wrapper">
                    <Switch>
                        <Route exact path={'/login'} component={Login} />
                        
                        <PrivateRoute exact path={"/"}>
                            <Dashboard />    
                        </PrivateRoute>

                        <PrivateRoute path={'/artwork'}>
                            <Artwork />
                        </PrivateRoute>
                    </Switch>
                </div> 
            </div> 
        </Router>
    );
}
export default App;