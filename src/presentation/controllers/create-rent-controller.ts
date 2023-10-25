import { Controller, HttpRequest, HttpResponse } from '@/presentation/controllers/ports';
import { UseCase } from '@/usecases/ports/use-case';

export class CreateRentController implements Controller {
  constructor(private readonly createRentUseCase: UseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const rent = request.body;
      const newRent = await this.createRentUseCase.perform(rent);

      return {
        statusCode: 200,
        body: newRent,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: error,
      };
    }
  }
}
