import { ErrorCodeEnum } from '../../contants/enum/errorCodeEnum';

export default class ErrorHandler extends Error {
  public mensagem: string;

  public codigoErro: ErrorCodeEnum;

  public httpStatusCode: number = 500;

  constructor(pMensagem: string, pCodigoErro: ErrorCodeEnum, pHttpStatusCode: number) {
    super(pMensagem);
    this.mensagem = pMensagem;
    this.codigoErro = pCodigoErro;
    this.httpStatusCode = pHttpStatusCode;
  }
}
