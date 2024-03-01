import { Conta } from '../../../entity/objectValues/Conta';

export class CriarContaOutput {
  public email: string;
  public nome: string;
  public senha: string;
  constructor(pConta: Conta) {
    this.email = pConta.email;
    this.nome = pConta.nome;
    this.senha = pConta.senha;
  }
}