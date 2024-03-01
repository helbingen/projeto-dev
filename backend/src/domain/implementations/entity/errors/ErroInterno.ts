import { ErrorCodeEnum } from '../../contants/enum/errorCodeEnum';
import ErrorHandler from './ErrorHandler';

export default class ErroInterno extends ErrorHandler {
  constructor(pMensagem: string) {
    super(pMensagem, ErrorCodeEnum.errorServidor, 403);
  }
}
