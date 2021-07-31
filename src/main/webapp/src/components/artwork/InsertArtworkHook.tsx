import { useState } from 'react';
import ArtworkIF from '../types/Artwork';

export const InsertArtworkHook = () => {

    const [artwork, setArtwork] = useState({
        artworkName: "",
        artistName: "",
        sizes: "",
        location: "",
        purchaseDate: "",
        purchaseLocation: "",
        price: 0,
        taxPrice: 0,
        transportPrice: 0,
        arr: 'false',
        framing: 0,
        description: "",
        notes: "",
    } as ArtworkIF);

    const changeHandler = (event) : void => {
        const { name, value } = event.target;
        setArtwork({ ...artwork, [name]: value });
    };

    const changeHandlerPrices = (e) : void => {
        const { name, value } = e.target;
        setArtwork({ ...artwork, [name]: value.replace(',', '.') });
    };

    const clearState = () : void => {
        setArtwork({
            artworkName: "",
            artistName: "",
            sizes: "",
            location: "",
            purchaseDate: "",
            purchaseLocation: "",
            price: 0,
            taxPrice: 0,
            transportPrice: 0,
            arr: 'false',
            framing: 0,
            description: "",
            notes: "",
        } as ArtworkIF);
    };

    return [artwork,
            changeHandler,
            changeHandlerPrices,
            clearState] as const;
};