import React, { useState } from 'react';
import api from '../../connection/common_http';

import {
    Form,
    Button,
    Col
} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';


import LocationIF from '../types/Location';
import { useDispatch } from 'react-redux';
import { showAlertAction } from "../../redux/actions/alertAction";

const InsertLocation = (props: any) => {

    const dispatch = useDispatch();
    const [newLocation, setNewLocation] = useState({} as LocationIF);

    const changeHandler = (event: any) => {
        const { name, value } = event.target;
        setNewLocation({ ...newLocation, [name]: value });
    };

    const checkboxChangeHandler = (event: any) => {
        const { name, checked } = event.target;
        setNewLocation({ ...newLocation, [name]: checked });
    };

    const closeOffCanvasHandler = () => {
        props.handleNewLocationCanvasClose();
        setNewLocation({} as LocationIF);
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        api.post('/api/location', newLocation)
            .then(response => {
                const alert = response.data.alert;
                dispatch(showAlertAction(alert.message, alert.type));
                closeOffCanvasHandler();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Menu
            width={'20%'}
            isOpen={props.newLocationForm}
            onClose={closeOffCanvasHandler}
            right
        >
            <div className="location-form-wrapper">
                <h3>New Location</h3>
                <Form onSubmit={onSubmit}>
                    <Col>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={newLocation.name}
                            onChange={changeHandler}
                            placeholder="Location Name" />
                    </Col>
                    <Col>
                        <label htmlFor="shortName">Short Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="shortName"
                            name="shortName"
                            value={newLocation.shortName}
                            onChange={changeHandler}
                            placeholder="Only 3 letters long" />
                    </Col>
                    <Col>
                        <label htmlFor="adress">Adress:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={newLocation.address}
                            onChange={changeHandler}
                            placeholder="Adress" />
                    </Col>
                    <Col>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="isForHouse"
                                name="isForHouse"
                                checked={newLocation.isForHouse}
                                onClick={checkboxChangeHandler} />
                            <label className="form-check-label"
                                htmlFor="isForHouse">House</label>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-check form-switch">
                            <input className="form-check-input"
                                type="checkbox"
                                id="isForArtwork"
                                name="isForArtwork"
                                checked={newLocation.isForArtwork}
                                onClick={checkboxChangeHandler} />
                            <label className="form-check-label"
                                htmlFor="flexSwitchCheckDefault">Artworks</label>
                        </div>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Col>
                </Form>
            </div>
        </Menu>
    );
}

export default InsertLocation;