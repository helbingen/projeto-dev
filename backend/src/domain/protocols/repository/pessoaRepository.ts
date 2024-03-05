import { Request } from 'express';
import { Pessoa } from '../../implementations/entity/objectValues/Pessoa';
import UnitOfWork from '../models/entity/UnitOfWork';
import PessoaSequelizeModel from '../../../infra/sequelize/models/PessoaSequelizeModel';

export interface IPessoaRepository {
  criar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<Pessoa>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<void>;
  editar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<boolean>;
  buscarPessoaPorIdentificacao(pIdentificacao: string): Promise<PessoaSequelizeModel | null>;
}