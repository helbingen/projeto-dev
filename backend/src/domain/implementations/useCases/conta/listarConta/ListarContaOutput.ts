import { Conta } from '../../../entity/objectValues/Conta';

export class ListarContaOutput {
  public email: string;
  public nome: string;
  constructor(pConta: Conta) {
    this.email = pConta.email;
    this.nome = pConta.nome;
  }
}