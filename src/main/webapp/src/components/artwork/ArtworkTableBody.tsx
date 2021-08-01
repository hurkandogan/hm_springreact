import React, { useState, useEffect } from 'react';
import ArtworkRow from './ArtworkRow';

const ArtworkTableBody = (props: any) => {

    const [artworks, setArtworks] = useState([] as any | null);

    useEffect(() => {
        setArtworks(props.artworks);
    }, [props.artworks]);

    return (
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
                    artworks.map((value: any, index: number) => {
                        return (
                            <ArtworkRow
                                key={index}
                                value={value}
                                offCanvasArtworkDetailHandler={props.offCanvasArtworkDetailHandler}
                            />)
                    })
                }
            </tbody>
        </table>
    )
}

export default ArtworkTableBody;