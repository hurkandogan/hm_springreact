import React from 'react';
import {
    BsPlusSquare
} from 'react-icons/bs';

const LocationHeader = (props) => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row justify-content-between mb-3">
                    <div className="col-6">
                        <h1>Locations</h1>
                        <small>Locations for Artworks and House Management.<br />
                            There are {props.locationCount}  location(s).</small>
                    </div>

                    <div className="col-6 btn-container">
                        <button className="btn btn-primary"
                            onClick={() => props.toggleNewLocationCanvas()}>
                            <BsPlusSquare /> Add New Location
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LocationHeader;