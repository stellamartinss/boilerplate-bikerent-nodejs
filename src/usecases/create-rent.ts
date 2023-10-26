import { Rent } from './datatypes/rent';
import { RentRepository } from './ports/rent-repository';
import { UseCase } from './ports/use-case';

export class CreateRent implements UseCase {
  constructor(private readonly rentRepository: RentRepository) {}

  async perform(rent: Rent): Promise<Rent> {
    const fee = rent.rate * 0.15

    const newRent = await this.rentRepository.add({
      userId: rent.userId,
      bikeId: rent.bikeId,
      to: rent.to,
      from: rent.from,
      price: rent.price + fee,
    });

    return newRent;
  }
}
