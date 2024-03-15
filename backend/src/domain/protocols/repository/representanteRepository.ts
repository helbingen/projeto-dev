import { Representante } from '../../implementations/entity/objectValues/Representante';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IRepresentanteRepository {
  criar(pUnitOfWork: UnitOfWork, pRepresentante: Representante): Promise<Representante>;
  editar(pUnitOfWork: UnitOfWork, pRepresentante: Representante): Promise<boolean>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pIdCliente: string): Promise<boolean>;
  listarTodosPorCliente(pIdCliente: string): Promise<Representante[]>;
  listarRepresentantePorId(pIdentificacao: string, pIdCliente: string): Promise<Representante | null>
}