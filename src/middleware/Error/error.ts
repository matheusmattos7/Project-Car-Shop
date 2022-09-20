import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import StatusCode from 'http-status-codes';
import { ZodError } from 'zod';
import { errorCatalog, ErrorTypes } from './errorCatalogs';

const error: ErrorRequestHandler = (
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
    const { statusHttp, message } = mappedError;

    return res.status(statusHttp).json({ message });
  }

  res.status(StatusCode.UNAUTHORIZED).json({ error: err.message });
};

export default error;