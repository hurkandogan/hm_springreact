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

import { CSSTransition } from 'react-transition-group';

import { PrivateRoute } from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import TopNav from "./components/shared/TopNav";
import Sidebar from "./components/shared/Sidebar";
import AlertBox from "./components/alert/AlertBox";

import { AppState } from './components/redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './components/redux/actions/userAction';
import { loadLocations } from './components/redux/actions/locationsAction';


import routes from './routes';

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
                                        <CSSTransition
                                            appear
                                            in
                                            timeout={300}
                                            classNames="animation"
                                            unmountOnExit
                                        >
                                            <div className="animation">
                                                <Login />
                                            </div>
                                        </CSSTransition>
                                    </Route>

                                    {routes.map((route: any, i: number) => {
                                        return (
                                            <PrivateRoute exact path={route.path} key={i}>
                                                <CSSTransition
                                                    appear
                                                    in
                                                    timeout={300}
                                                    classNames="animation"
                                                    unmountOnExit
                                                >
                                                    <div className="animation">
                                                        <route.Component />
                                                    </div>
                                                </CSSTransition>
                                            </PrivateRoute>
                                        )
                                    })
                                    }
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