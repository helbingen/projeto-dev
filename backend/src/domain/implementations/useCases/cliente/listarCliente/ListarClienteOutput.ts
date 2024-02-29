import { Cliente } from '../../../entity/objectValues/Cliente';

export class ListarClienteOutput {

  public situacao: string;
  public data_cadastro: Date;
  public identificacao: string;
  constructor(pCliente: Cliente) {
    this.situacao = pCliente.situacao;
    this.data_cadastro = pCliente.data_cadastro;
    this.identificacao = pCliente.identificacao;
  }
}