import React, {useEffect, useState} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import authService from './connection/auth.service';
import User from './components/types/User';

// Components
import { PrivateRoute } from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import TopNav from "./components/shared/TopNav";
import Sidebar from "./components/shared/Sidebar";
import Dashboard from "./components/content/Dashboard";
import Artwork from "./components/artwork/Artwork";

function App() {

    const [loggedUser, setLoggedUser] = useState<User>({} as User);

    const getUser = async () => setLoggedUser(authService.getCurrentUser());
    
    useEffect(() => {
        getUser();
    }, [])

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