import { ICar, zodCarSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarsService implements IService<ICar> {
  private _cars: IModel<ICar>;

  constructor(carsModel: IModel<ICar>) {
    this._cars = carsModel;
  }

  public async create(car: ICar): Promise<ICar> {
    const parsed = zodCarSchema.safeParse(car);
    if (!parsed.success) {
      throw parsed.error;
    }

    const result = await this._cars.create(car);
    return result;
  }
}

export default CarsService;