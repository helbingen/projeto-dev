import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { CriarClienteOutput } from './CriarClienteOutput';

export class CriarCliente {
  constructor(private clienteRepository: IClienteRepository) { }

  public async execute(pUnitWork: UnitOfWork): Promise<CriarClienteOutput> {
    const cliente = new Cliente();
    const clienteDb = await this.clienteRepository.criar(pUnitWork, cliente);
    return Promise.resolve(new CriarClienteOutput(clienteDb));
  }
}