import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Moment from 'moment';

const ArtworkDetail = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);

    const editFormHandler = () => setShowEditForm(!showEditForm);

    const handleOnClose = () => {
        props.offCanvasArtworkDetailHandler();
        if(showEditForm){
            editFormHandler();
        }
    };

    const handleOnSave = (e) => {
        e.preventDefault();
        props.editSelectedArtwork();
        handleOnClose();
    }
    
    return (
        <Menu
            width={'50%'}
            isOpen={props.offCanvasArtworkDetailToggle}
            onClose={handleOnClose}
            right
        >
            <div className="container">
            <div className="row justify-content-between">
                <div className="col">
                    <h3 className="offcanvas-headline">Artwork Details</h3>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary off-canvas-btn" onClick={editFormHandler}>Edit</button>
                </div>
            </div>
            </div>
            {showEditForm ? (
                <form onSubmit={handleOnSave}>
                    <p>Edit form</p>
                    <input type="hidden"
                        id="id"
                        name="id"
                        value={props.selectedArtwork.id ?? ""}
                        readOnly />
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="artworkName">Artwork Name</label>
                        <input type="text"
                            className="form-control"
                            name="artworkName"
                            id="artworkName"
                            placeholder="Artwork Name"
                            autoComplete="off"
                            value={props.selectedArtwork.artworkName ?? ""}
                            onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="artistName">Artist Name</label>
                        <input type="text"
                            className="form-control"
                            name="artistName"
                            id="artistName"
                            placeholder="Artist Name"
                            autoComplete="off"
                                value={props.selectedArtwork.artistName ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="sizes">Sizes</label>
                        <input type="text"
                            className="form-control"
                            name="sizes"
                            id="sizes"
                            placeholder="Sizes"
                            autoComplete="off"
                                value={props.selectedArtwork.sizes ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="location">Location</label>
                        <input type="text"
                            className="form-control"
                            name="location"
                            id="location"
                            placeholder="Location"
                            autoComplete="off"
                                value={props.selectedArtwork.location ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="purchaseDate">Purchase Date</label>
                        <input type="date"
                            className="form-control"
                            name="purchaseDate"
                            id="purchaseDate"
                            placeholder="Purchase Date"
                            autoComplete="off"
                                value={props.selectedArtwork.purchaseDate ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="purchaseLocation">Location of purchase</label>
                        <input type="text"
                            className="form-control"
                            name="purchaseLocation"
                            id="purchaseLocation"
                            placeholder="Location of purchase"
                            autoComplete="off"
                                value={props.selectedArtwork.purchaseLocation ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="price">Price in €</label>
                        <input type="text"
                            className="form-control"
                            name="price"
                            id="price"
                            placeholder="Price in €"
                            autoComplete="off"
                                value={props.selectedArtwork.price ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="taxPrice">Tax Cost</label>
                        <input type="text"
                            className="form-control"
                            name="taxPrice"
                            id="taxPrice"
                            placeholder="Tax"
                            autoComplete="off" 
                                value={props.selectedArtwork.taxPrice ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="transportPrice">Transport Cost</label>
                        <input type="text"
                            className="form-control"
                            name="transportPrice"
                            id="transportPrice"
                            placeholder="Transport"
                            autoComplete="off"
                                value={props.selectedArtwork.transportPrice ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="framing">Framing Cost</label>
                        <input type="text"
                            className="form-control"
                            name="framing"
                            id="framing"
                            placeholder="Transport"
                            autoComplete="off"
                                value={props.selectedArtwork.framing ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="arr">ARR</label>
                        <select className="form-control"
                            name="arr"
                            id="arr"
                            placeholder="ARR"
                            autoComplete="off"
                                value={props.selectedArtwork.arr ?? ""}
                                onChange={props.editSelectedArtworkHandler}>
                                <option value={'false'}>No</option>
                                <option value={'true'}>Yes</option>
                            </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="description">Artwork Description</label>
                        <textarea className="form-control"
                            name="description"
                            id="description"
                                value={props.selectedArtwork.description ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="notes">Notes</label>
                        <textarea className="form-control"
                            name="notes"
                            id="notes"
                                value={props.selectedArtwork.notes ?? ""}
                                onChange={props.editSelectedArtworkHandler} />
                    </div>
                </div>
                <button className="btn btn-primary mt-3">
                    Save
                    {false && (
                        <div className="spinner-border text-light" role="status">
                            <span className="sr-only"></span>
                        </div>
                    )}
                </button>
            </form>
            ) : (
                <div>
            <div className="container">
            <img src="https://picsum.photos/100/100" alt={props.selectedArtwork.artworkName ?? ""} />
            <div className="row mt-3">
                <div className="col">
                    <h5>Artwork Name:</h5>
                        <p className="detail-text">{ props.selectedArtwork.artworkName ?? ""}</p>
                </div>
                <div className="col">
                    <h5>Artist Name:</h5>
                    <p className="detail-text">{props.selectedArtwork.artistName ?? ""}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h5>Sizes:</h5>
                    <p className="detail-text">{props.selectedArtwork.sizes ?? ""}</p>
                </div>
                <div className="col">
                    <h5>Location:</h5>
                    <p className="detail-text">{props.selectedArtwork.location ?? ""}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h5>Purchase Date:</h5>
                    <p className="detail-text">{props.selectedArtwork.purchaseDate ?? ""}</p>
                </div>
                <div className="col">
                    <h5>Purchase Date:</h5>
                    <p className="detail-text">{props.selectedArtwork.purchaseLocation ?? ""}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h5>Price in €:</h5>
                        <p className="detail-text">{props.selectedArtwork.price ?? 0.00}</p>
                </div>
                <div className="col">
                    <h5>Tax:</h5>
                        <p className="detail-text">{props.selectedArtwork.taxPrice ?? 0.00}</p>
                </div>
                <div className="col">
                    <h5>Transport Cost:</h5>
                        <p className="detail-text">{props.selectedArtwork.transportPrice ?? 0.00}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h5>Framing Cost:</h5>
                    <p className="detail-text">{props.selectedArtwork.framing ?? 0.00}</p>
                </div>
                <div className="col">
                    <h5>ARR:</h5>
                    <p className="detail-text">{props.selectedArtwork.arr ?? ""}</p>
                </div>
                </div>
            <div className="row mt-3">
                <div className="col">
                    <h5>Artwork Description:</h5>
                    <p className="detail-text">{props.selectedArtwork.description ?? 0.00}</p>
                </div>
                <div className="col">
                    <h5>Notes:</h5>
                    <p className="detail-text">{props.selectedArtwork.notes ?? 0.00}</p>
                </div>
            </div>
        </div>
        </div>
    )
}
    </Menu>
    );
};

export default ArtworkDetail;