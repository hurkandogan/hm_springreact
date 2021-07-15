import React, { useState, useEffect } from 'react';
import api from '../../connection/common_http';
import InsertArtwork from '../offcanvas/InsertArtwork';
import ArtworkDetail from '../offcanvas/ArtworkDetail';
import ArtworkRow from './ArtworkRow';
import authService from '../../connection/auth.service';
import ArtworkHeader from './ArtworkHeader';

const Artwork = () => {

    const [artworks, setArtworks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [offCanvasToggle, setOffCanvasToggle] = useState(false);
    const [offCanvasArtworkDetailToggle, setOffCanvasArtworkDetailToggle] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState({} || null);

    useEffect(() => {
        getArtworks();
    }, []);

    const getArtworks = () => {
        setLoading(true);
        api.get('/api/artwork')
            .then(response => {
                if (response.status === 401) {
                    authService.signout();
                    window.location.reload();
                }
                setArtworks(response.data);
            })
            .catch(err => console.log(err));
        setLoading(false);
    };
    
    const offCanvasHandler = async () => setOffCanvasToggle(!offCanvasToggle);

    const offCanvasArtworkDetailHandler = async (value) => {
        setSelectedArtwork(value ?? {});
        setOffCanvasArtworkDetailToggle(!offCanvasArtworkDetailToggle);
    };

    const editSelectedArtworkHandler = event => {
        const { name, value } = event.target;
        setSelectedArtwork({ ...selectedArtwork, [name]: value });
    };

    const editSelectedArtwork = () => {
        setLoading(true);
        api.put('/api/artwork', selectedArtwork)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        setSelectedArtwork({});
        setOffCanvasArtworkDetailToggle(!offCanvasArtworkDetailToggle);
        getArtworks();
        setLoading(false);
    };

    return (
        <div className="content-wrapper">
            
            <InsertArtwork
                offCanvasToggle={offCanvasToggle}
                offCanvasHandler={offCanvasHandler} />
            
            <ArtworkDetail
                offCanvasArtworkDetailToggle={offCanvasArtworkDetailToggle}
                offCanvasArtworkDetailHandler={offCanvasArtworkDetailHandler}
                editSelectedArtworkHandler={editSelectedArtworkHandler}
                editSelectedArtwork={editSelectedArtwork}
                selectedArtwork={selectedArtwork}
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
                    <table className="table table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Artwork</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Location</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artworks &&
                                artworks.map((el) => {
                                    return (
                                        <ArtworkRow
                                            key={el.id}
                                            el={el}
                                            offCanvasArtworkDetailHandler={offCanvasArtworkDetailHandler}
                                             />
                                );
                            })
                            }
                        </tbody>
                    </table>
                   }
                </div>
            </div>
        </div>
    );
};

export default Artwork;