import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';
import { ICar } from '../interfaces/ICar';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
}, {
  versionKey: false,
});

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('CarsModel', carSchema)) {
    super(model);
  }
}

export default CarsModel;
