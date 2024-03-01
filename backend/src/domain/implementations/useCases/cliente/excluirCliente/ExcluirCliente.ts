import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';

export class ExcluirCliente {
  constructor(private clienteRepository: IClienteRepository) { }

  public async execute(pUnitWork: UnitOfWork): Promise<void> {
    const cliente = new Cliente();
    await this.clienteRepository.excluir(pUnitWork, cliente.identificacao);
  }
}