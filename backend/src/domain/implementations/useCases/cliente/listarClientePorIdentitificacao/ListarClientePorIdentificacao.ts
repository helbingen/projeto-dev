import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { Pessoa } from '../../../entity/objectValues/Pessoa';
import { listarPessoaPorIdentificacaoInput } from '../../pessoa/listarPessoaPorIdentificacao/listarPessoaPorIdentificacaoInput';
import { ListarClientePorIdentificacaoInput } from './ListarClientePorIdentificacaoInput';
import { ListarClientePorIdentificacaoOutput } from './ListarClientePorIdentificacaoOutput';

export class ListarClientePorIdentificacao {
  constructor(private clienteRepository: IClienteRepository, private pessoaRepository: IPessoaRepository) { }

  public async execute(pInputCliente: ListarClientePorIdentificacaoInput): Promise<ListarClientePorIdentificacaoOutput | null> {

    const cliente = new Cliente({
      identificacao: pInputCliente.identificacao,
    });
    const pessoa = new Pessoa({
      identificacao: cliente.identificacao
    })


    const clienteDb = await this.clienteRepository.listarClientePorId(cliente.identificacao);
    const pessoaDb = await this.pessoaRepository.buscarPessoaPorIdentificacao(cliente.identificacao);
    if (clienteDb && pessoaDb) {
      return new ListarClientePorIdentificacaoOutput(clienteDb, pessoaDb);
    }
    return null;
  }
}