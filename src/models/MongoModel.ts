import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middleware/Error/errorCatalogs';

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
    if (!isValidObjectId(id)) {
      throw Error(ErrorTypes.InvalidMongoId);
    }

    const data = await this.model.findById(id);
    return data;
  }

  public async update(_id: string, data: T): Promise<T | null> {
    if (!isValidObjectId(_id)) {
      throw Error(ErrorTypes.InvalidMongoId);
    }

    const newData = await this.model.findByIdAndUpdate(_id, data as UpdateQuery<T>, {
      new: true,
    });
    return newData;
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) {
      throw Error(ErrorTypes.InvalidMongoId);
    }

    const deleted = await this.model.findByIdAndDelete(_id);
    return deleted;
  }
}

export default MongoModel;