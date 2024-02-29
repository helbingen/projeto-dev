import EntryPointResponseError from './EntryPointResponseError';

export default class EntryPointResponse<T = any> {
  public sucesso: boolean = true;

  public codigo: number = 0;

  public mensagem: string = '';

  public dados: T | null;

  public error: EntryPointResponseError | null = null;

  constructor(pSucesso: boolean, pCodigo: number, pMensagem: string, pDados: T | null, pErro: EntryPointResponseError | null) {
    this.sucesso = pSucesso;
    this.codigo = pCodigo;
    this.mensagem = pMensagem;
    this.dados = pDados;
    this.error = pErro;
  }
}
