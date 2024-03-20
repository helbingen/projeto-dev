import { ITelefone, ITelefoneModel, ITelefoneModelCreate } from '../../../protocols/models/entity/objectValues/telefone';

export class Telefone implements ITelefone {

  public numero: string = '';
  public is_principal: boolean = false;
  public identificacao: string = '';
  public idContato: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: ITelefoneModel) {
    if (pValores === undefined) return;

    this.numero = pValores.numero ?? this.numero;
    this.is_principal = pValores.is_principal ?? this.is_principal;
    this.identificacao = pValores.identificacao ?? this.identificacao;
    this.idContato = pValores.idContato ?? this.idContato;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;
  }


  public gerarObjCriar(): ITelefoneModelCreate {
    return {
      numero: this.numero,
      is_principal: this.is_principal,
      identificacao: this.identificacao,
      idContato: this.idContato,
    };
  }
}
