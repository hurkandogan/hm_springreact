import React, { useState } from 'react';

import {
    BsCardImage,
    BsHouseDoor
} from 'react-icons/bs';

import LocationHeader from './LocationHeader';
import InsertLocation from './InsertLocation';
import EditLocation from './EditLocation';

import LocationIF from '../types/Location';
import { AppState } from '../redux';
import { useSelector } from 'react-redux';


const Location = () => {

    const locations = useSelector((state: AppState) => state.locations.locations);
    const [newLocationFormOffCanvas, setNewLocationFormOffCanvas] = useState<boolean>(false);
    const [editLocationFormOffCanvas, setEditLocationFormOffCanvas] = useState<boolean>(false);
    const [editedLocation, setEditedLocation] = useState({} as LocationIF);

    const setSelectedEditedLocation = (location: LocationIF) => {
        setEditedLocation(location);
        toggleEditLocationCanvas();
    }
    const toggleNewLocationCanvas = (): void => {
        setNewLocationFormOffCanvas(!newLocationFormOffCanvas);
    }
    const toggleEditLocationCanvas = (): void => {
        setEditLocationFormOffCanvas(!editLocationFormOffCanvas);
    }
    const closeEditLocationCanvas = (): void => {
        setEditedLocation({} as LocationIF);
    }
    const editedLocationChangeHandler = (event: any) => {
        const { name, value } = event.target;
        if (editedLocation !== undefined) {
            setEditedLocation({ ...editedLocation, [name]: value });
        }
    };
    const editedLocationCheckboxChangeHandler = (event: any) => {
        const { name, checked } = event.target;
        if (editedLocation !== undefined) {
            setEditedLocation({ ...editedLocation, [name]: checked });
        }
    };
    const mapLocations: HTMLElement = locations.map((location: LocationIF, index: number): any => {
        return (
            <li key={index}
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedEditedLocation(location)}>
                <p>{location.isForHouse && <div className="location-listing-icons"><BsHouseDoor /></div>}
                    {location.isForArtwork && <div className="location-listing-icons"><BsCardImage /></div>}
                    {location.name} | {location.shortName}</p></li>
        );
    });

    return (
        <div>
            <InsertLocation
                newLocationForm={newLocationFormOffCanvas}
                handleNewLocationCanvasClose={toggleNewLocationCanvas}
            />

            <EditLocation
                location={editedLocation}
                editLocationForm={editLocationFormOffCanvas}
                closeEditLocationCanvas={closeEditLocationCanvas}
                toggleEditLocationCanvas={toggleEditLocationCanvas}
                editedLocationChangeHandler={editedLocationChangeHandler}
                editedLocationCheckboxChangeHandler={editedLocationCheckboxChangeHandler} />

            <LocationHeader
                locationCount={locations.length}
                toggleNewLocationCanvas={toggleNewLocationCanvas}
            />

            <ul className="list-group">
                {mapLocations}
            </ul>
            <p><BsHouseDoor />: Location for house expenses</p>
            <p><BsCardImage />: Location for artworks</p>
        </div>
    );
}

export default Location;