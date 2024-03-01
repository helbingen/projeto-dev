import ClienteSequelizeModel from '../../../infra/sequelize/models/ClienteSequelizeModel';
import { Cliente } from '../../implementations/entity/objectValues/Cliente';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IClienteRepository {
  criar(pUnitOfWork: UnitOfWork, pCliente: Cliente): Promise<Cliente>;
  listarTodos(pUnitOfWork: UnitOfWork): Promise<Cliente[]>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<void>;
  editar(pUnitOfWork: UnitOfWork, pCliente: Cliente): Promise<void>
}