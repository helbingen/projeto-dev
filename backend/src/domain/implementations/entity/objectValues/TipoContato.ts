import { ITipoContato, ITipoContatoModel, ITipoContatoModelCreate } from '../../../protocols/models/entity/objectValues/tipoContato';


export class TipoContato implements ITipoContato {

  public idContato: string = '';
  public descricaoContato: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: ITipoContatoModel) {
    if (pValores === undefined) return;

    this.idContato = pValores.idContato ?? this.idContato;
    this.descricaoContato = pValores.descricaoContato ?? this.descricaoContato;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;
  }


  public gerarObjCriar(): ITipoContatoModelCreate {
    return {
      idContato: this.idContato,
      descricaoContato: this.descricaoContato,
    };
  }
}
