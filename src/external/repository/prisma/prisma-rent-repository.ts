import { RentRepository } from '@/usecases/ports/rent-repository';
import prismaClient from './prisma-client';
import { Rent } from '@/usecases/datatypes/rent';

export class PrismaRentRepository implements RentRepository {
    async add(rent: Rent): Promise<Rent> {
        return await prismaClient.rent.create({
            data: {
                userId: rent.userId,
                bikeId: rent.bikeId,
                price: rent.price,
            }
        })
    }
}