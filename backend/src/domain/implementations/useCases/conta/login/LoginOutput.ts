import { Conta } from '../../../entity/objectValues/Conta';

export class LoginOutput {
  public email: string;
  public senha: string;
  constructor(pConta: Conta) {
    this.email = pConta.email;
    this.senha = pConta.senha;
  }
}