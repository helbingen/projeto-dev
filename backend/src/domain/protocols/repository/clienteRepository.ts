import { Cliente } from '../../implementations/entity/objectValues/Cliente';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IClienteRepository {
  criar(pUnitOfWork: UnitOfWork, pCliente: Cliente): Promise<Cliente>;
  listarTodos(pUnitOfWork: UnitOfWork): Promise<Cliente[]>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<boolean>;
  editar(pUnitOfWork: UnitOfWork, pCliente: Cliente): Promise<boolean>;
  listarClientePorId(pIdCliente: string): Promise<Cliente | null>;
}