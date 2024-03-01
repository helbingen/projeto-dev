import { Request, Response } from 'express';
import EntryPoint from '../../domain/implementations/entity/entryPoints/EntryPoint';
import EntrypointData from '../../domain/implementations/entity/entryPoints/EntryPointData';
import ErrorHandler from '../../domain/implementations/entity/errors/ErrorHandler';
import EntryPointFail from '../../domain/implementations/entity/entryPoints/EntryPointFail';
import ErroInternoServidor from '../../domain/implementations/entity/errors/ErroInternoServidor';

export default class ExpressAdapter {
  static handler(pEntryPoint: EntryPoint) {
    return async (pRequest: Request, pResponse: Response) => {
      try {
        const requestIp = pRequest.connection.remoteAddress?.split(':').pop() ?? '';
        const tokenAuthorizationHeader = pRequest.headers.authorization ?? '';
        let tokenApplicationHeader = '';
        if (pRequest.headers.application) {
          if (pRequest.headers.application instanceof Array) {
            tokenApplicationHeader = pRequest.headers.application[0];
          } else {
            tokenApplicationHeader = pRequest.headers.application;
          }
        }

        const entryData = new EntrypointData(tokenAuthorizationHeader, pRequest.body, pRequest.params);

        // for (const guard of pEntryPoint.guards) {
        //   const guardResult = await guard.execute(entryData, requestIp);
        //   if (guardResult.erro !== null) {
        //     throw guardResult.erro;
        //   }
        // }
        const controllerResult = await pEntryPoint.controller.execute(entryData);
        return pResponse.status(controllerResult.codigo).json(controllerResult);
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
        return pResponse.status(response.codigo).json(response);
      }
    };
  }
}
