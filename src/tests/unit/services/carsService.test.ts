import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { Model } from 'mongoose';
import { carMock, validCar } from '../../carMock';
const { expect } = chai;

describe('CarsService', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel)

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
      const result = await carsService.create(validCar);

      expect(result).to.be.deep.equal(carMock);
    });
  })

  describe('Read function', () => {
    it('Listado com sucesso', async () => {
      const result = await carsService.read();

      expect(result).to.be.deep.equal([]);
    });
  })

  describe('ReadOne function', () => {
    it('Listado por id com sucesso', async () => {
      const result = await carsService.readOne('9723b23b23b23b23b23b23b2');

      expect(result).to.be.deep.equal(carMock);
    });
  })

  describe('Update function', () => {
    it('Atualizado com sucesso', async () => {
      const result = await carsService.update('9723b23b23b23b23b23b23b2', validCar);

      expect(result).to.be.deep.equal(carMock);
    });
  })

});