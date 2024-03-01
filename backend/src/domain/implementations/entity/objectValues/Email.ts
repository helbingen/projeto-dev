import { IEmail, IEmailModel, IEmailModelCreate } from '../../../protocols/models/entity/objectValues/email';

export class Email implements IEmail {


  public email: string = '';
  public is_principal: boolean = false;
  public identificacao: string = '';
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(pValores?: IEmailModel) {
    if (pValores === undefined) return;

    this.email = pValores.email ?? this.email;
    this.is_principal = pValores.is_principal ?? this.is_principal;
    this.identificacao = pValores.identificacao ?? this.identificacao;
    this.createdAt = pValores.createdAt ?? this.createdAt;
    this.updatedAt = pValores.updatedAt ?? this.updatedAt;


  }

  public gerarObjCriar(): IEmailModelCreate {
    return {
      email: this.email,
      is_principal: this.is_principal,
      identificacao: this.identificacao,
    };
  }
}
