import { IConta, IContaModel, IContaModelCreate } from '../../../protocols/models/entity/objectValues/conta';

export class Conta implements IConta {

  public email: string = '';
  public nome: string = '';
  public senha: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: IContaModel) {
    if (pValores === undefined) return;

    this.email = pValores.email ?? this.email;
    this.nome = pValores.nome ?? this.nome;
    this.senha = pValores.senha ?? this.senha;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;


  }

  public gerarObjCriar(): IContaModelCreate {
    return {
      email: this.email,
      nome: this.nome,
      senha: this.senha,
    };
  }
}
