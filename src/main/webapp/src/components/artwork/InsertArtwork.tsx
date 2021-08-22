import React, { useState } from 'react';
import api from '../connection/common_http';
import { InsertArtworkHook } from './InsertArtworkHook';
import { artworkValidation } from './ArtworkFieldValidation';

import { slide as Menu } from 'react-burger-menu';

import { AppState } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import { showAlertAction } from "../redux/actions/alertAction";

const InsertArtwork = (props) => {

    const dispatch = useDispatch();

    const locations = useSelector((state: AppState) => state.locations.locations);

    const [loading, setLoading] = useState(false);
    const [artwork,
        artworkChangeHandler,
        pricesChangeHandler,
        clearState] = InsertArtworkHook();

    const submitArtwork = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (artworkValidation(artwork)) {
            await api.post("/api/artwork", artwork)
                .then(response => {
                    console.log(response)
                    const alert = response.data.alert;
                    dispatch(showAlertAction(alert.message, alert.alertType));
                })
                .catch(err => console.error(err));
            clearState();
            props.getArtworks();
            props.offCanvasHandler();
        }
        setLoading(false);
    }

    return (
        <Menu
            width={'50%'}
            isOpen={props.offCanvasToggle}
            onClose={props.offCanvasHandler}
            right>

            <h3>Add new Artwork</h3>
            <form onSubmit={submitArtwork}>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="artworkName">Artwork Name</label>
                        <input type="text"
                            className="form-control"
                            name="artworkName"
                            id="artworkName"
                            placeholder="Artwork Name"
                            autoComplete="off"
                            value={artwork.artworkName}
                            onChange={artworkChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="artistName">Artist Name</label>
                        <input type="text"
                            className="form-control"
                            name="artistName"
                            id="artistName"
                            placeholder="Artist Name"
                            autoComplete="off"
                            value={artwork.artistName}
                            onChange={artworkChangeHandler} />
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
                            value={artwork.sizes}
                            onChange={artworkChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="location">Location</label>
                        <select className="form-control"
                            name="location"
                            id="location"
                            placeholder="Location"
                            autoComplete="off"
                            value={artwork.location}
                            onChange={artworkChangeHandler}>
                            {locations.filter(location => location.isForArtwork)
                                .map(location =>
                                    <option value={location.shortName}>
                                        {location.shortName} | {location.name}
                                    </option>
                                )}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="folderNumber">Folder Number</label>
                        <input type="text"
                            className="form-control"
                            name="folderNumber"
                            id="folderNumber"
                            placeholder="Folder Number"
                            autoComplete="off"
                            value={artwork.folderNumber}
                            onChange={artworkChangeHandler} />
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
                            value={artwork.purchaseDate}
                            onChange={artworkChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="purchaseLocation">Location of purchase</label>
                        <input type="text"
                            className="form-control"
                            name="purchaseLocation"
                            id="purchaseLocation"
                            placeholder="Location of purchase"
                            autoComplete="off"
                            value={artwork.purchaseLocation}
                            onChange={artworkChangeHandler} />
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
                            value={artwork.price}
                            onChange={pricesChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="taxPrice">Tax Cost</label>
                        <input type="text"
                            className="form-control"
                            name="taxPrice"
                            id="taxPrice"
                            placeholder="Tax"
                            autoComplete="off"
                            value={artwork.taxPrice}
                            onChange={pricesChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="transportPrice">Transport Cost</label>
                        <input type="text"
                            className="form-control"
                            name="transportPrice"
                            id="transportPrice"
                            placeholder="Transport Cost"
                            autoComplete="off"
                            value={artwork.transportPrice}
                            onChange={pricesChangeHandler} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="framing">Framing Cost</label>
                        <input type="text"
                            className="form-control"
                            name="framing"
                            id="framing"
                            placeholder="Framing Cost"
                            autoComplete="off"
                            value={artwork.framing}
                            onChange={pricesChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="arr">ARR</label>
                        <select className="form-control"
                            name="arr"
                            id="arr"
                            placeholder="ARR"
                            autoComplete="off"
                            value={artwork.arr}
                            onChange={artworkChangeHandler}>
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
                            value={artwork.description}
                            onChange={artworkChangeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="notes">Notes</label>
                        <textarea className="form-control"
                            name="notes"
                            id="notes"
                            value={artwork.notes}
                            onChange={artworkChangeHandler} />
                    </div>
                </div>
                <button className="btn btn-primary mt-3" disabled={loading}>
                    Save
                    {loading && (
                        <div className="spinner-border text-light" role="status">
                            <span className="sr-only"></span>
                        </div>
                    )}
                </button>
            </form>
        </Menu>
    );
};

export default InsertArtwork;