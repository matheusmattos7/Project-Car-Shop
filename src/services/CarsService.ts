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

  public async read(): Promise<ICar[]> {
    return this._cars.read();
  }

  public async readOne(id: string): Promise<ICar | null> {
    const result = this._cars.readOne(id);

    return result;
  }

  public async update(id: string, car: ICar): Promise<ICar | null> {
    const parsed = zodCarSchema.safeParse(car);
    if (!parsed.success) {
      throw parsed.error;
    }

    const result = await this._cars.update(id, car);

    return result;
  }

  public async delete(id: string): Promise<ICar | null> {
    const result = await this._cars.delete(id);

    return result;
  }
}

export default CarsService;