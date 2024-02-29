export default class EntrypointData<TBody = any, TParametros = any> {

  public tokenAuthorization: string = '';

  public body: TBody;

  public parametros: TParametros;

  constructor(pTokenAuthorization: string, pBody: TBody, pParametros: TParametros) {
    this.tokenAuthorization = pTokenAuthorization;
    this.body = pBody;
    this.parametros = pParametros;
  }
}
