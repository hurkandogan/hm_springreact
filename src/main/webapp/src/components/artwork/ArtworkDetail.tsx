import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import api from '../../connection/common_http';

import { AppState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { showAlertAction } from "../../redux/actions/alertAction";

const ArtworkDetail = (props: any) => {

    const dispatch = useDispatch();
    const locations = useSelector((state: AppState) => state.locations.locations);

    const [showEditForm, setShowEditForm] = useState(false);

    const editFormHandler = () => setShowEditForm(!showEditForm);

    const handleOnClose = () => {
        props.offCanvasArtworkDetailHandler();
        props.getArtworks();
        if (showEditForm) {
            editFormHandler();
        }
    };

    const handleOnSave = async (e: any) => {
        e.preventDefault();
        await props.editSelectedArtwork();
        handleOnClose();
    }

    const deleteArtwork = (artworkId: number): void => {
        api.delete(`/api/artwork/${artworkId}`)
            .then(response => {
                console.log(response);
                const alert = response.data.alert;
                dispatch(showAlertAction(alert.message, alert.alertType));
                handleOnClose();
            })
            .catch(error => console.log(error));
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
                <div>
                    <form onSubmit={handleOnSave}>
                        <p>Edit form</p>
                        <input type="hidden"
                            id="id"
                            name="id"
                            value={props.selectedArtwork.id}
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
                                    value={props.selectedArtwork.artworkName}
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
                                    value={props.selectedArtwork.artistName}
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
                                    value={props.selectedArtwork.sizes}
                                    onChange={props.editSelectedArtworkHandler} />
                            </div>
                            <div className="col">
                                <label htmlFor="location">Location</label>
                                <select className="form-control"
                                    name="location"
                                    id="location"
                                    placeholder="Location"
                                    autoComplete="off"
                                    value={props.selectedArtwork.location}
                                    onChange={props.editSelectedArtworkHandler}>
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
                                    placeholder="Folder number index"
                                    autoComplete="off"
                                    value={props.selectedArtwork.folderNumber}
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
                                    value={props.selectedArtwork.purchaseDate}
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
                                    value={props.selectedArtwork.purchaseLocation}
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
                                    value={props.selectedArtwork.price}
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
                                    value={props.selectedArtwork.taxPrice}
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
                                    value={props.selectedArtwork.transportPrice}
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
                                    value={props.selectedArtwork.framing}
                                    onChange={props.editSelectedArtworkHandler} />
                            </div>
                            <div className="col">
                                <label htmlFor="arr">ARR</label>
                                <select className="form-control"
                                    name="arr"
                                    id="arr"
                                    placeholder="ARR"
                                    autoComplete="off"
                                    value={props.selectedArtwork.arr}
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
                                    value={props.selectedArtwork.description}
                                    onChange={props.editSelectedArtworkHandler} />
                            </div>
                            <div className="col">
                                <label htmlFor="notes">Notes</label>
                                <textarea className="form-control"
                                    name="notes"
                                    id="notes"
                                    value={props.selectedArtwork.notes}
                                    onChange={props.editSelectedArtworkHandler} />
                            </div>
                        </div>
                        <div className="edit-form-btn">
                            <button className="btn btn-primary mt-3" type="submit">
                                Save
                                {false && (
                                    <div className="spinner-border text-light" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="edit-form-btn">
                        <button className="btn btn-warning mt-3"
                            onClick={() => console.log("sold button clicked")}>
                            Mark as Sold
                            {false && (
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            )}
                        </button>
                        <button className="btn btn-danger mt-3"
                            onClick={() => deleteArtwork(props.selectedArtwork.id)}>
                            Delete
                            {false && (
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img src="https://picsum.photos/100/100"
                                    alt={props.selectedArtwork.artworkName} />
                            </div>
                            <div className="col-3">
                                <p>Folder Number: {props.selectedArtwork.folderNumber}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5>Artwork Name:</h5>
                                <p className="detail-text">{props.selectedArtwork.artworkName}</p>
                            </div>
                            <div className="col">
                                <h5>Artist Name:</h5>
                                <p className="detail-text">{props.selectedArtwork.artistName}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5>Sizes:</h5>
                                <p className="detail-text">{props.selectedArtwork.sizes}</p>
                            </div>
                            <div className="col">
                                <h5>Location:</h5>
                                <p className="detail-text">{props.selectedArtwork.location}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5>Purchase Date:</h5>
                                <p className="detail-text">{props.selectedArtwork.purchaseDate}</p>
                            </div>
                            <div className="col">
                                <h5>Purchase Date:</h5>
                                <p className="detail-text">{props.selectedArtwork.purchaseLocation}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5>Price in €:</h5>
                                <p className="detail-text">{props.selectedArtwork.price}</p>
                            </div>
                            <div className="col">
                                <h5>Tax:</h5>
                                <p className="detail-text">{props.selectedArtwork.taxPrice}</p>
                            </div>
                            <div className="col">
                                <h5>Transport Cost:</h5>
                                <p className="detail-text">{props.selectedArtwork.transportPrice}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5>Framing Cost:</h5>
                                <p className="detail-text">{props.selectedArtwork.framing}</p>
                            </div>
                            <div className="col">
                                <h5>ARR:</h5>
                                <p className="detail-text">{props.selectedArtwork.arr}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5>Artwork Description:</h5>
                                <p className="detail-text">{props.selectedArtwork.description}</p>
                            </div>
                            <div className="col">
                                <h5>Notes:</h5>
                                <p className="detail-text">{props.selectedArtwork.notes}</p>
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