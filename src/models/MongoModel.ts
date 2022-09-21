import { Model, UpdateQuery } from 'mongoose';
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

  public async update(id: string, data: T): Promise<T | null> {
    const newData = await this.model.findByIdAndUpdate(id, data as UpdateQuery<T>, {
      new: true,
    });
    return newData;
  }

  public async delete(id: string): Promise<T | null> {
    const deleted = await this.model.findByIdAndDelete(id);
    return deleted;
  }
}

export default MongoModel;