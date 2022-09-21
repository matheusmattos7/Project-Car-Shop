import StatusCode from '../../Util/StatusCode';

export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = {
  message: string,
  statusHttp: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not found',
    statusHttp: StatusCode.NOT_FOUND,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    statusHttp: StatusCode.BAD_REQUEST,
  },
};