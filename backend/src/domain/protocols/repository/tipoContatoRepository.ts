import { TipoContato } from '../../implementations/entity/objectValues/TipoContato';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface ITipoContatoRepository {
  criar(pUnitOfWork: UnitOfWork, pTipoContato: TipoContato): Promise<TipoContato>;
  editar(pUnitOfWork: UnitOfWork, pTipoContato: TipoContato): Promise<boolean>;
  excluir(pUnitOfWork: UnitOfWork, idContato: string): Promise<boolean>;
  listarTodos(): Promise<TipoContato[]>;
  listarPorDescricao(pDescricao: string): Promise<TipoContato | null>;
  listarPorId(idContato: string): Promise<TipoContato | null>;
}