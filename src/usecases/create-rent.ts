import { Rent } from './datatypes/rent';
import { RentRepository } from './ports/rent-repository';
import { UseCase } from './ports/use-case';

export class CreateRent implements UseCase {
  constructor(private readonly rentRepository: RentRepository) {}

  async perform(rent: Rent): Promise<Rent> {
    const newRent = await this.rentRepository.add({
      userId: rent.userId,
      bikeId: rent.bikeId,
      price: rent.price,
    });

    return newRent;
  }
}
