import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import { PrivateRoute } from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import TopNav from "./components/shared/TopNav";
import Sidebar from "./components/shared/Sidebar";
import Dashboard from "./components/content/Dashboard";
import Artwork from "./components/artwork/Artwork";
import Location from "./components/location/Location";
import Register from "./components/auth/Register";
import AlertBox from "./components/alert/AlertBox";

import { AppState } from './components/redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './components/redux/actions/userAction';
import { loadLocations } from './components/redux/actions/locationsAction';

function App() {

    const user = useSelector((state: AppState) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
        dispatch(loadLocations());
    }, [dispatch])

    return (
        <Router>
            <Container fluid>
                <Row>
                    {user.token && <Sidebar />}

                    <Col>
                        {user.token && <TopNav />}
                        <div className="switch-wrapper">
                            <div className="content-wrapper">
                                <Switch>

                                    <Route exact path={'/login'}>
                                        <Login />
                                    </Route>

                                    <PrivateRoute exact path={"/"}>
                                        <Dashboard />
                                    </PrivateRoute>

                                    <PrivateRoute path={'/artwork'}>
                                        <Artwork />
                                    </PrivateRoute>

                                    <PrivateRoute path={'/location/:locationId'}>
                                        <Dashboard />
                                    </PrivateRoute>

                                    <PrivateRoute path={'/versicherungen'}>
                                        <Dashboard />
                                    </PrivateRoute>

                                    <PrivateRoute path={'/register'}>
                                        <Register />
                                    </PrivateRoute>

                                    <PrivateRoute path={'/locations'}>
                                        <Location />
                                    </PrivateRoute>

                                </Switch>
                            </div>
                        </div>
                    </Col>
                    <AlertBox />
                </Row>
            </Container>
        </Router>
    );
}
export default App;