import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { ListarClienteOutput } from './ListarClienteOutput';

export class ListarCliente {
  constructor(private clienteRepository: IClienteRepository) { }

  public async execute(pUnitWork: UnitOfWork): Promise<ListarClienteOutput[]> {
    const clienteDb = await this.clienteRepository.listarTodos(pUnitWork);
    return clienteDb.map((cliente) => new Cliente(cliente))
  }
}