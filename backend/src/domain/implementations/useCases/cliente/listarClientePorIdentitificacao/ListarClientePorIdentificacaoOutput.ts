import { ICliente } from '../../../../protocols/models/entity/objectValues/cliente';
import { IPessoa } from '../../../../protocols/models/entity/objectValues/pessoa';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { Pessoa } from '../../../entity/objectValues/Pessoa';

export class ListarClientePorIdentificacaoOutput {

  public cliente: ICliente;
  public pessoa: IPessoa;

  constructor(pCliente: Cliente, pPessoa: Pessoa) {

    this.cliente = {
      data_cadastro: pCliente.data_cadastro,
      identificacao: pCliente.identificacao,
      situacao: pCliente.situacao,
    };
    this.pessoa = {
      identificacao: pPessoa.identificacao,
      nome: pPessoa.nome,
      nome_mae: pPessoa.nome_mae,
      nome_fantasia: pPessoa.nome_fantasia,
      inscrição_estadual: pPessoa.inscrição_estadual,
      inscrição_municipal: pPessoa.inscrição_municipal,
    }
  }
}