import { Telefone } from '../../implementations/entity/objectValues/Telefone';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface ITelefoneRepository {
  criar(pUnitOfWork: UnitOfWork, pTelefone: Telefone): Promise<Telefone>;
  listarTelefonePorId(pIdentificacao: string, pNumero: string): Promise<Telefone | null>;
  editar(pUnitOfWork: UnitOfWork, pTelefone: Telefone): Promise<boolean>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pNumero: string): Promise<boolean>
  listarTodos(pIdentificacao: string): Promise<Telefone[]>
}