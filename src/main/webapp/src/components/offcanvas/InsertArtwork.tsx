import React, { useState } from 'react';
import api from '../../connection/common_http';

import { slide as Menu } from 'react-burger-menu';

const InsertArtwork = (props) => {

    const ARTWORK_INITIAL_VALUE = {
        artworkName: "",
        artistName: "",
        sizes: "",
        location: "",
        purchaseDate: "",
        purchaseLocation: "",
        price: "",
        taxPrice: "",
        transportPrice: "",
        arr: 0,
        framing: "",
        description: "",
        notes:"",
    };

    const [loading, setLoading] = useState(false);
    const [artwork, setArtwork] = useState(ARTWORK_INITIAL_VALUE);

    const changeHandler = e => {
        const { name, value } = e.target;
        setArtwork({ ...artwork, [name]: value });
    };
    const changeHandlerPrices = e => {
        const { name, value } = e.target;
        setArtwork({ ...artwork, [name]: value.replace(',', '.') });
    };
    
    const submitArtwork = async (e) => {
        e.preventDefault();
        setLoading(true);
        await api.post("/api/artwork", artwork)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        setArtwork(ARTWORK_INITIAL_VALUE);
        setLoading(false);
        props.offCanvasHandler();
    }

    return (
        <Menu
            width={'50%'}
            isOpen={props.offCanvasToggle}
            onClose={props.offCanvasHandler}
            right
        >
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
                            onChange={changeHandler} />
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
                            onChange={changeHandler} />
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
                            onChange={changeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="location">Location</label>
                        <input type="text"
                            className="form-control"
                            name="location"
                            id="location"
                            placeholder="Location"
                            autoComplete="off"
                            value={artwork.location}
                            onChange={changeHandler} />
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
                            onChange={changeHandler} />
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
                            onChange={changeHandler} />
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
                            onChange={changeHandlerPrices} />
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
                            onChange={changeHandlerPrices} />
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
                            onChange={changeHandlerPrices} />
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
                            onChange={changeHandlerPrices} />
                    </div>
                    <div className="col">
                        <label htmlFor="arr">ARR</label>
                        <select className="form-control"
                            name="arr"
                            id="arr"
                            placeholder="ARR"
                            autoComplete="off"
                            value={artwork.arr}
                            onChange={changeHandler}>
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
                            onChange={changeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="notes">Notes</label>
                        <textarea className="form-control"
                            name="notes"
                            id="notes"
                            value={artwork.notes}
                            onChange={changeHandler} />
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