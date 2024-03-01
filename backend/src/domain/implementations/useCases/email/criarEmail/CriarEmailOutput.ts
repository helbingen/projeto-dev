import { Email } from '../../../entity/objectValues/Email';

export class CriarEmailOutput {
  public email: string;
  public is_principal: boolean;
  public identificacao: string;
  constructor(pEmail: Email) {
    this.email = pEmail.email;
    this.is_principal = pEmail.is_principal;
    this.identificacao = pEmail.identificacao;
  }
}