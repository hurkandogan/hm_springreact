import React from 'react';

const ArtworkRow = (props) => {

    return (
        <tr key={props.el.id}
            onMouseUp={() => props.offCanvasArtworkDetailHandler(props.el)}>
            <th scope="row">
                <img src="https://picsum.photos/50/50" alt={props.el.artworkName} />
            </th>
            <td>{props.el.artworkName}</td>
            <td>{props.el.artistName}</td>
            <td>{props.el.location}</td>
            <td>{props.el.price} €</td>
        </tr>
    );
};

export default ArtworkRow;