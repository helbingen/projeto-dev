import { ErrorCodeEnum } from '../../contants/enum/errorCodeEnum';
import ErrorHandler from './ErrorHandler';

export default class InformacaoNaoInfomada extends ErrorHandler {
  constructor(pMensagem: string) {
    super(pMensagem, ErrorCodeEnum.informacaoNaoInfomada, 400);
  }
}
