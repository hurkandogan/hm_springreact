import React from 'react';
import {
    Toast
} from "react-bootstrap";
import { AppState } from '../../redux';
import { hideAlertAction } from "../../redux/actions/alertAction";
import { useSelector, useDispatch } from 'react-redux';

const AlertBox = () => {

    const dispatch = useDispatch();
    const alert = useSelector((state: AppState) => state.alert);

    const handleClose = () => {
        dispatch(hideAlertAction());
    }

    return (
        <div className="alert-wrapper">
            <Toast onClose={handleClose} show={alert.show} delay={10000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{alert.alertType}</strong>
                    <small>10 seconds</small>
                </Toast.Header>
                <Toast.Body className="{alert.alertType}">{alert.msg}</Toast.Body>
            </Toast>
        </div>
    );
};

export default AlertBox;