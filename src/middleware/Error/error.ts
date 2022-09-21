import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import StatusCode from '../../Util/StatusCode';
import { errorCatalog, ErrorTypes } from './errorCatalogs';

const errorMiddleware: ErrorRequestHandler = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: err.issues });
  }
  const messageAsError = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsError];

  if (mappedError) {
    const { statusHttp, error } = mappedError;

    return res.status(statusHttp).json({ error });
  }

  res.status(StatusCode.UNAUTHORIZED).json({ error: err.message });
};

export default errorMiddleware;