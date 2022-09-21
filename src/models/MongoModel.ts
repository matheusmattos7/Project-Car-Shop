import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    const data = await this.model.find();
    return data;
  }

  public async readOne(id: string): Promise<T | null> {
    const data = await this.model.findById(id);
    return data;
  }
}

export default MongoModel;