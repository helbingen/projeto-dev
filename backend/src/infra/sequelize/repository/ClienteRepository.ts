import { Cliente } from '../../../domain/implementations/entity/objectValues/Cliente';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import ClienteSequelizeModel from '../models/ClienteSequelizeModel';

export class ClienteRepository {

  public async criar(pUnitOfWork: UnitOfWork, pCliente: Cliente): Promise<Cliente> {
    const clienteDb = await db.models.cliente.create<ClienteSequelizeModel>(pCliente.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Cliente(clienteDb));
  }

  public async excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<void> {
    await db.models.cliente.destroy<ClienteSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
      },
      transaction: pUnitOfWork.getTransition(),
    });
  }

  public async editar(pUnitOfWork: UnitOfWork, pCliente: Cliente): Promise<void> {
    await db.models.cliente.update<ClienteSequelizeModel>(pCliente.gerarObjetoEditar(), {
      where: {
        identificacao: pCliente.identificacao
      },
      transaction: pUnitOfWork.getTransition(),
    });
  }

  public async listarTodos(): Promise<Cliente[]> {
    const clienteDb = await db.models.cliente.findAll<ClienteSequelizeModel>();
    return clienteDb.map((cliente) => new Cliente(cliente))
  }
}