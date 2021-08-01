import React from 'react';

const ArtworkRow = (props) => {
    return (
        <tr
            onMouseUp={() => props.offCanvasArtworkDetailHandler(props.value)}>
            <th scope="row">
                <img src="https://picsum.photos/50/50" alt={props.value.artworkName} />
            </th>
            <td>{props.value.artworkName}</td>
            <td>{props.value.artistName}</td>
            <td>{props.value.location}</td>
            <td>{props.value.price} €</td>
        </tr>
    );
};

export default ArtworkRow;