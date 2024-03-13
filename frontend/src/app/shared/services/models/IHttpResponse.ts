interface EntryPointResponseError {
  descricao: string;
  codigoErro: string;
}

export interface IHttpResponse<T = any> {
  sucesso: boolean;
  codigo: number;
  mensagem: string;
  dados: T | null;
  error: EntryPointResponseError | null;
}
