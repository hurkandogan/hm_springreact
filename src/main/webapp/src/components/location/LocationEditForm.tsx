import React, { useState, useEffect } from 'react';
import api from '../../connection/common_http';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';

import LocationIF from '../types/Location';

const LocationEditForm = (props) => {

    // const [editLocation, setEditLocation] = useState<LocationIF>(props.location || {});

    // const changeHandler = event => {
    //     const { name, value } = event.target;
    //     setEditLocation({ ...editLocation, [name]: value });
    // }
    // const checkoutHandler = event => {
    //     const { name, checked } = event.target;
    //     setEditLocation({ ...editLocation, [name]: checked });
    // }

    // const onSubmit = event => {
    //     event.preventDefault();
    //     api.put('/locations', editLocation)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    // const onDelete = () => {
    //     api.delete('/locations/' + editLocation.id)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    return (
        <Form>
            <Row>
                <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={0}
                    placeholder="Short Name"
                    hidden />
                <Col xs={3}>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={"test"}

                        placeholder="Location Name" />
                </Col>
                <Col xs={2}>
                    <input
                        type="text"
                        className="form-control"
                        name="shortName"
                        value={"test"}

                        placeholder="Short Name" />
                </Col>
                <Col xs={3}>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={"test"}
                        placeholder="Adress" />
                </Col>
                <Col xs={1}>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="isForHouse" />
                        <label className="form-check-label"
                            htmlFor="isForHouse">House</label>
                    </div>
                </Col>
                <Col xs={1}>
                    <div className="form-check form-switch">
                        <input className="form-check-input"
                            type="checkbox"
                            name="isForArtwork" />
                        <label className="form-check-label"
                            htmlFor="flexSwitchCheckDefault">Artworks</label>
                    </div>
                </Col>
                <Col xs={1} className="location-edit-btn">
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Col>
                <Col xs={1}>
                    <Button variant="danger"
                        type="button"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default LocationEditForm;