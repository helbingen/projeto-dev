import { TipoContato } from '../../../entity/objectValues/TipoContato';

export class ListarContatoPorIdOutput {
  public idContato: string;
  public descricaoContato: string;
  constructor(pTipoContato: TipoContato) {
    this.idContato = pTipoContato.idContato;
    this.descricaoContato = pTipoContato.descricaoContato;
  }
}