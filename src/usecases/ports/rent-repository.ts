import { Rent } from '../datatypes/rent';

export interface RentRepository {
    add(rent: Rent): Promise<Rent>
}