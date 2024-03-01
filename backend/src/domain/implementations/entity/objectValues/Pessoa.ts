import { IPessoa, IPessoaModel, IPessoaModelCreate } from '../../../protocols/models/entity/objectValues/pessoa';

export class Pessoa implements IPessoa {

  public nome: string = '';
  public nome_fantasia: string = '';
  public nome_mae: string = '';
  public inscrição_municipal: string = '';
  public inscrição_estadual: string = '';
  public identificacao: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: IPessoaModel) {
    if (pValores === undefined) return;

    this.nome = pValores.nome ?? this.nome;
    this.nome_fantasia = pValores.nome_fantasia ?? this.nome_fantasia;
    this.nome_mae = pValores.nome_mae ?? this.nome_mae;
    this.inscrição_municipal = pValores.inscrição_municipal ?? this.inscrição_municipal;
    this.inscrição_estadual = pValores.inscrição_estadual ?? this.inscrição_estadual;
    this.identificacao = pValores.identificacao ?? this.identificacao;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;
  }

  public gerarObjCriar(): IPessoaModelCreate {
    return {
      nome: this.nome,
      nome_fantasia: this.nome_fantasia,
      nome_mae: this.nome_mae,
      inscrição_estadual: this.inscrição_estadual,
      inscrição_municipal: this.inscrição_municipal,
      identificacao: this.identificacao,
    };
  }
}
