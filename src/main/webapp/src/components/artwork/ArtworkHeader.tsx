import React from 'react';
import {
    BsPlusSquare,
    BsCloudDownload
} from 'react-icons/bs';

const ArtworkHeader = (props) => {
    
    return (
        <div className="row justify-content-between mb-3">
            
            <div className="col-6">
                <h1>Artwork</h1>
                <small>In Kai's Inventory there are {props.artworkCount} piece(s).</small>
            </div>
            
            <div className="col-6 btn-container">
                
                <button className="btn btn-primary" disabled={true}>
                    <BsCloudDownload /> Download as PDF(<small>in Dev.</small>)
                </button>
                
                <button className="btn btn-primary"
                    onClick={ () => props.offCanvasHandler() }>
                    <BsPlusSquare /> Add New Artwork
                </button>

            </div>
        </div>
    );
}

export default ArtworkHeader;