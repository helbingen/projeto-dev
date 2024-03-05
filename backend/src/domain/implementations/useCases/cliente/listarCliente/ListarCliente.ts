import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { ListarClienteOutput } from './ListarClienteOutput';

export class ListarCliente {
  constructor(private clienteRepository: IClienteRepository, private pessoaRepository: IPessoaRepository) { }

  public async execute(pUnitWork: UnitOfWork): Promise<ListarClienteOutput[]> {
    const clienteDb = await this.clienteRepository.listarTodos(pUnitWork);
    await this.pessoaRepository.listarTodos(pUnitWork);
    return clienteDb;
  }
}