export const artworkValidation = (artwork) => {

    let error: boolean = false;

    const artworkName: HTMLElement | any = document.getElementById('artworkName');
    const artistName: HTMLElement | any = document.getElementById('artistName');
    const location: HTMLElement | any = document.getElementById('location');
    const price: HTMLElement | any = document.getElementById('price');

    if (artwork.artworkName === "" || typeof artwork.artworkName !== "string") {
        artworkName.classList.add('error');
        error = true;
    } else {
        artworkName.classList.remove('error');
    }

    if (artwork.artistName === "" || typeof artwork.artistName !== "string") {
        artistName.classList.add('error');
        error = true;
    } else {
        artistName.classList.remove('error');
    }

    if (artwork.location === "" || typeof artwork.location !== "string") {
        location.classList.add('error');
        error = true;
    } else {
        location.classList.remove('error');
    }

    if (artwork.price < 0 || typeof parseFloat(artwork.price) !== "number") {
        price.classList.add('error');
        error = true;
    } else {
        price.classList.remove('error');
    }
    
    return !error;
};