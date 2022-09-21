import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/CarsModel';
import { Model } from 'mongoose';
import { carMock, validCar} from '../../carMock';
const { expect } = chai;

describe('CarsModel', () => {
  const carsModel = new CarsModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMock);
    sinon.stub(Model, 'find').resolves([]);
    sinon.stub(Model, 'findOne').resolves(carMock);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create function', () => {
    it('Criado com sucesso', async () => {
      const result = await carsModel.create(validCar);

      expect(result).to.be.equal(carMock);
    });
  })

  describe('Read function', () => {
    it('Listado com sucesso', async () => {
      const result = await carsModel.read();

      expect(result).to.be.deep.equal([]);
    });
  })

  describe('ReadOne function', () => {
    it('Listado por id com sucesso', async () => {
      const result = await carsModel.readOne('9723b23b23b23b23b23b23b2');

      expect(result).to.be.equal(carMock);
    });
  })

  describe('Update function', () => {
    it('Atualizado com sucesso', async () => {
      const result = await carsModel.update('9723b23b23b23b23b23b23b2', validCar);

      expect(result).to.be.equal(carMock);
    });
  })
});