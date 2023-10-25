import { Controller } from '@/presentation/controllers/ports';
import { makeRentRepository } from './make-rent-repository';
import { CreateRent } from '@/usecases/create-rent';
import { CreateRentController } from '@/presentation/controllers/create-rent-controller';
import { makeBikeRepository } from './make-bike-repository';

export const makeCreateRentController = (): Controller => {
  const rentRepository = makeRentRepository();

  const createRentUseCase = new CreateRent(rentRepository)
  const createRentController = new CreateRentController(createRentUseCase);

  return createRentController;
};
