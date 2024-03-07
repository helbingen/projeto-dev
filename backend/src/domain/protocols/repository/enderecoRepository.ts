import { Endereco } from '../../implementations/entity/objectValues/Endereco';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IEnderecoRepository {
  criar(pUnitOfWork: UnitOfWork, pEndereco: Endereco): Promise<Endereco>;
  isEnderecoExist(pCep: string, pIdentificacao: string): Promise<boolean>;
  editar(pUnitOfWork: UnitOfWork, pEndereco: Endereco, pIdentificacao: string): Promise<boolean>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pCep: string): Promise<boolean>
  listarTodos(pIdentificacao: string): Promise<Endereco[]>
}