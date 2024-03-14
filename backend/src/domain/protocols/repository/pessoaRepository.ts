import { Pessoa } from '../../implementations/entity/objectValues/Pessoa';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IPessoaRepository {
  criar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<Pessoa>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<void>;
  editar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<boolean>;
  buscarPessoaPorIdentificacao(pIdentificacao: string): Promise<Pessoa | null>;
  listarTodos(pUnitOfWork: UnitOfWork): Promise<Pessoa[]>;
}