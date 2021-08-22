export default interface Artwork{
    artworkName: string;
    artistName: string;
    sizes?: string;
    location: string;
    purchaseDate?: string;
    purchaseLocation?: string;
    price: number;
    taxPrice?: number;
    transportPrice?: number;
    arr: string; //boolean
    framing?: number;
    description?: string;
    notes?: string;
    artworkIsSold?: boolean;
    folderNumber?: number;
    totalPrice?: number;
}