import { Request, Response } from 'express';
import EntryPoint from '../../domain/implementations/entity/entryPoints/EntryPoint';
import EntrypointData from '../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointFail from '../../domain/implementations/entity/entryPoints/EntryPointFail';
import ErroInternoServidor from '../../domain/implementations/entity/errors/ErroInternoServidor';
import ErrorHandler from '../../domain/implementations/entity/errors/ErrorHandler';

export default class ExpressAdapter {
  static handler(pEntryPoint: EntryPoint) {
    return async (pRequest: Request, pResponse: Response): Promise<void> => {
      try {
        const requestIp = pRequest.connection.remoteAddress?.split(':').pop() ?? '';
        const tokenAuthorizationHeader = pRequest.headers.authorization ?? '';

        const entryData = new EntrypointData(tokenAuthorizationHeader, pRequest.body, pRequest.params);

        for (const guard of pEntryPoint.guards) {
          const guardResult = await guard.execute(entryData, requestIp);
          if (guardResult.erro !== null) {
            throw guardResult.erro;
          }
        }
        const controllerResult = await pEntryPoint.controller.execute(entryData);

        pResponse.status(controllerResult.codigo).json(controllerResult);
      } catch (error) {
        let response: EntryPointFail;
        if (error instanceof EntryPointFail) {
          response = error;
        } else if (error instanceof ErrorHandler) {
          response = new EntryPointFail(error);
        } else if (error instanceof Error) {
          response = new EntryPointFail(new ErroInternoServidor(error));
        } else {
          response = new EntryPointFail(new ErroInternoServidor(new Error(error as any)));
        }
        pResponse.status(response.codigo).json(response);
      }
    };
  }
}
