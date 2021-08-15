import React, { useState } from 'react';

import LocationHeader from './LocationHeader';
import LocationEditForm from './LocationEditForm';
import InsertLocation from './InsertLocation';

import {
    Accordion
} from 'react-bootstrap';

import LocationIF from '../types/Location';
import { AppState } from '../../redux';
import { useSelector } from 'react-redux';


const Location = () => {

    const locations = useSelector((state: AppState) => state.locations.locations);
    const [newLocationForm, setNewLocationForm] = useState<boolean>(false);

    const toggleNewLocationCanvas = (): void => {
        setNewLocationForm(!newLocationForm);
    }

    const mapLocations = locations.map((location: LocationIF, index: number): any => {
        return (
            <Accordion.Item key={index} eventKey={"\"" + index + "\""}>
                <Accordion.Header>{location.name}</Accordion.Header>
                <Accordion.Body>
                    <LocationEditForm location={location} />
                </Accordion.Body>
            </Accordion.Item>
        );
    });

    return (
        <div>
            <InsertLocation
                newLocationForm={newLocationForm}
                handleNewLocationCanvasClose={toggleNewLocationCanvas}
            />
            <LocationHeader
                locationCount={locations.length}
                toggleNewLocationCanvas={toggleNewLocationCanvas}
            />
            <Accordion defaultActiveKey="0">
                {mapLocations}
            </Accordion>
        </div>
    );
}

export default Location;