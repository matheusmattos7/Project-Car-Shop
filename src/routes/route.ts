import { Router } from 'express';

import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';
import CarsController from '../controllers/CarsController';

const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

const Route = Router();

Route.post('/cars', (req, res, next) => carsController.create(req, res, next));

export default Route;