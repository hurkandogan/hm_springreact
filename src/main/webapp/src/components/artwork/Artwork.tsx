import React, { useState, useEffect } from 'react';
import api from '../connection/common_http';
import InsertArtwork from './InsertArtwork';
import ArtworkDetail from './ArtworkDetail';
import authService from '../connection/auth.service';
import ArtworkHeader from './ArtworkHeader';
import ArtworkTableBody from './ArtworkTableBody';

import { useDispatch } from 'react-redux';
import { showAlertAction } from "../redux/actions/alertAction";

const Artwork = () => {

    const [artworks, setArtworks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [offCanvasToggle, setOffCanvasToggle] = useState(false);
    const [offCanvasArtworkDetailToggle, setOffCanvasArtworkDetailToggle] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState({} || null);

    const dispatch = useDispatch();

    useEffect(() => {
        getArtworks();
    }, []);

    const getArtworks = () => {
        setLoading(true);
        api.get('/api/artwork')
            .then(response => {
                if (response.status !== 200) {
                    authService.signout();
                    window.location.reload();
                    return;
                }
                setArtworks(response.data);
            })
            .catch(err => console.log(err));
        setLoading(false);
    };

    const editSelectedArtwork = () => {
        setLoading(true);
        api.put('/api/artwork', selectedArtwork)
            .then(response => {
                if (response.status !== 200) {
                    authService.signout();
                    window.location.reload();
                    return;
                }
                const alert = response.data.alert;
                if (alert) {
                    dispatch(showAlertAction(alert.message, alert.alertType));
                }
            })
            .catch(err => console.log(err));
        setSelectedArtwork({});
        setOffCanvasArtworkDetailToggle(!offCanvasArtworkDetailToggle);
        setLoading(false);
    };

    const offCanvasHandler = async () => setOffCanvasToggle(!offCanvasToggle);

    const offCanvasArtworkDetailHandler = (value) => {
        setSelectedArtwork(value ?? {});
        setOffCanvasArtworkDetailToggle(!offCanvasArtworkDetailToggle);
    };

    const editSelectedArtworkHandler = event => {
        const { name, value } = event.target;
        setSelectedArtwork({ ...selectedArtwork, [name]: value });
    };

    return (
        <div>

            <InsertArtwork
                offCanvasToggle={offCanvasToggle}
                offCanvasHandler={offCanvasHandler}
                getArtworks={getArtworks}
            />

            <ArtworkDetail
                offCanvasArtworkDetailToggle={offCanvasArtworkDetailToggle}
                offCanvasArtworkDetailHandler={offCanvasArtworkDetailHandler}
                editSelectedArtworkHandler={editSelectedArtworkHandler}
                editSelectedArtwork={editSelectedArtwork}
                selectedArtwork={selectedArtwork}
                getArtworks={getArtworks}
            />

            <div className="content-header">
                <div className="container-fluid">
                    <ArtworkHeader
                        offCanvasHandler={offCanvasHandler}
                        artworkCount={artworks.length} />

                    {loading ?
                        <div className="spinner-border text-dark table-spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        :
                        <ArtworkTableBody
                            artworks={artworks}
                            offCanvasArtworkDetailHandler={offCanvasArtworkDetailHandler}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Artwork;