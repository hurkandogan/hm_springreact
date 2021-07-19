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
                        <h1>{props.locationName}</h1>
                        <small>For {props.locationName} there are 0 invoice(s).</small>
                    </div>

                    <div className="col-6 btn-container">

                        <button className="btn btn-primary" disabled={true}>
                            {/* <BsCloudDownload /> Download as PDF(<small>in Dev.</small>) */}
                        </button>

                        <button className="btn btn-primary"
                            onClick={() => props.offCanvasHandler()}>
                            <BsPlusSquare /> Add New Artwork
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LocationHeader;