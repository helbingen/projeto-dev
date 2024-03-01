import { ErrorCodeEnum } from '../../contants/enum/errorCodeEnum';
import ErrorHandler from './ErrorHandler';

export default class ErroInternoServidor extends ErrorHandler {
  constructor(pError: Error | any) {
    super('Erro interno do servidor.', ErrorCodeEnum.errorServidor, 500);
    console.error(pError);
  }
}
