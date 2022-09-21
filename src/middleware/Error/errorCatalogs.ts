import StatusCode from '../../Util/StatusCode';

export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = {
  error: string,
  statusHttp: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'Object not found',
    statusHttp: StatusCode.NOT_FOUND,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    statusHttp: StatusCode.BAD_REQUEST,
  },

};