export interface Rent {
    id?: number;
    userId: number;
    bikeId: number;
    price: number;
    to: Date,
    from: Date
    rate?: number
}