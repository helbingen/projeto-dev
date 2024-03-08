import { IRepresentante, IRepresentanteModel, IRepresentanteModelCreate } from '../../../protocols/models/entity/objectValues/representante';

export class Representante implements IRepresentante {

  public nome: string = '';
  public identificacao: string = '';
  public id_cliente: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: IRepresentanteModel) {
    if (pValores === undefined) return;

    this.nome = pValores.nome ?? this.nome;
    this.identificacao = pValores.identificacao ?? this.identificacao;
    this.id_cliente = pValores.id_cliente ?? this.id_cliente;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;
  }

  public gerarObjCriar(): IRepresentanteModelCreate {
    return {
      nome: this.nome,
      identificacao: this.identificacao,
      id_cliente: this.id_cliente,
    };
  }
}
