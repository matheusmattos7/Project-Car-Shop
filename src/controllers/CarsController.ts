import { NextFunction, Request, Response } from 'express';
import StatusCode from '../Util/StatusCode';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../middleware/Error/errorCatalogs';

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

      return res.status(StatusCode.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  }

  public async read(
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await this._carsService.read();

      return res.status(StatusCode.OK).json(result);
    } catch (err) {
      next(err);
    }
  }

  public async readOne(
    req: Request,
    res: Response<ICar | null>,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result = await this._carsService.readOne(id);

      if (!result) {
        throw Error(ErrorTypes.EntityNotFound);
      }

      return res.status(StatusCode.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default CarsController;