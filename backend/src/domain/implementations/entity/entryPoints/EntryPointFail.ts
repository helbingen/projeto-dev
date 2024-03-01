import ErrorHandler from '../errors/ErrorHandler';
import EntryPointResponse from './EntryPointResponse';
import EntryPointResponseError from './EntryPointResponseError';

export default class EntryPointFail implements EntryPointResponse {
  public sucesso: boolean;

  public codigo: number;

  public mensagem: string;

  public dados: any | null;

  public error: EntryPointResponseError | null;

  constructor(pErro: ErrorHandler | Error | any) {
    this.sucesso = false;
    if (pErro instanceof ErrorHandler) {
      this.codigo = pErro.httpStatusCode;
      this.mensagem = pErro.mensagem;
      this.error = new EntryPointResponseError(pErro);
    } else {
      this.codigo = 500;
      this.mensagem = 'Erro interno do servidor';
      this.error = null;
      console.error(pErro);
    }
  }
}
