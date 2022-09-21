import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  private _carsService: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._carsService = service;
  }

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
    next: NextFunction,
  ) {
    try {
      const { body } = req;
      const result = await this._carsService.create(body);

      return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default CarsController;