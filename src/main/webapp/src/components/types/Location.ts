import Invoice from './Invoice';

export default interface Location {
        id: number;
        name: string;
        shortName: string;
        adress: string;
        invoices: Array<Invoice>;
    }