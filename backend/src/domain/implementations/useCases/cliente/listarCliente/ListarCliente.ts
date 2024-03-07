import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { ListarClienteOutput } from './ListarClienteOutput';

export class ListarCliente {
  constructor(private clienteRepository: IClienteRepository, private pessoaRepository: IPessoaRepository) { }

  public async execute(pUnitWork: UnitOfWork): Promise<ListarClienteOutput[]> {
    const clienteDb = await this.clienteRepository.listarTodos(pUnitWork);
    const pessoaDb = await this.pessoaRepository.listarTodos(pUnitWork);

    const listarClienteOutputArray: ListarClienteOutput[] = [];

    for (let i = 0; i < clienteDb.length; i++) {
      const cliente = clienteDb[i];
      const pessoa = pessoaDb[i];
      const output = new ListarClienteOutput(cliente, pessoa);
      listarClienteOutputArray.push(output);
    }
    return listarClienteOutputArray;
  }
}