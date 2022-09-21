import { ICar, zodCarSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../middleware/Error/errorCatalogs';

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

  public async read(): Promise<ICar[]> {
    return this._cars.read();
  }

  public async readOne(id: string): Promise<ICar | null> {
    const result = this._cars.readOne(id);

    if (!result) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return result;
  }
}

export default CarsService;