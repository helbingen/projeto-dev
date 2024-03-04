import { Request } from 'express';
import { Pessoa } from '../../implementations/entity/objectValues/Pessoa';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IPessoaRepository {
  criar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<Pessoa>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<void>;
  editar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<void>
}