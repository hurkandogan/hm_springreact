import React from 'react';
import api from '../connection/common_http';

import {
    Form,
    Button,
    Col
} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';

import { useDispatch } from 'react-redux';
import { showAlertAction } from "../redux/actions/alertAction";
import { loadLocations } from '../redux/actions/locationsAction';

const EditLocation = (props: any) => {

    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        event.preventDefault();
        api.put('/api/location', props.location)
            .then(response => {
                const alert = response.data.alert;
                dispatch(showAlertAction(alert.message, alert.type));
                dispatch(loadLocations());
                props.toggleEditLocationCanvas();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onDelete = (locationId: any) => {
        api.delete(`/api/location/${locationId}`)
            .then(response => {
                const alert = response.data.alert;
                dispatch(showAlertAction(alert.message, alert.type));
                dispatch(loadLocations());
                props.toggleEditLocationCanvas();
            })
            .catch(err => {
                console.log(err);
            });
    }

    const offCanvasCloseHandler = () => {
        props.closeEditLocationCanvas();
        props.toggleEditLocationCanvas();
    }

    return (
        <Menu
            width={'20%'}
            isOpen={props.editLocationForm}
            onClose={offCanvasCloseHandler}
            right
        >
            <div className="location-form-wrapper">
                <h3>Edit Location</h3>
                <Form onSubmit={onSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={props.location.id}
                        placeholder="Short Name"
                        hidden
                        readOnly />
                    <Col>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={props.location.name}
                            onChange={props.editedLocationChangeHandler}
                            placeholder="Location Name" />
                    </Col>
                    <Col>
                        <label htmlFor="shortName">Short Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="shortName"
                            value={props.location.shortName}
                            onChange={props.editedLocationChangeHandler}
                            placeholder="Only 3 letters long" />
                    </Col>
                    <Col>
                        <label htmlFor="adress">Address:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={props.location.address}
                            onChange={props.editedLocationChangeHandler}
                            placeholder="Address" />
                    </Col>
                    <Col>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="isForHouse"
                                checked={props.location.isForHouse}
                                onClick={props.editedLocationCheckboxChangeHandler} />
                            <label className="form-check-label"
                                htmlFor="isForHouse">House</label>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-check form-switch">
                            <input className="form-check-input"
                                type="checkbox"
                                name="isForArtwork"
                                checked={props.location.isForArtwork}
                                onClick={props.editedLocationCheckboxChangeHandler} />
                            <label className="form-check-label"
                                htmlFor="flexSwitchCheckDefault">Artworks</label>
                        </div>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Save
                            {false && (
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            )}
                        </Button>
                        <Button variant="danger" type="button" onClick={() => onDelete(props.location.id)}>
                            Delete
                            {false && (
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            )}
                        </Button>
                    </Col>
                    <Col>

                    </Col>
                </Form>
            </div>
        </Menu>
    );
}

export default EditLocation;