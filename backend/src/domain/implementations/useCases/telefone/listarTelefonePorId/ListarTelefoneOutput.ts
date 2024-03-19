import { Telefone } from '../../../entity/objectValues/Telefone';

export class ListarTelefonePorIdOutput {
  public numero: string;
  public is_principal: boolean;
  public identificacao: string;
  constructor(pTelefone: Telefone) {
    this.numero = pTelefone.numero;
    this.is_principal = pTelefone.is_principal;
    this.identificacao = pTelefone.identificacao;
  }
}