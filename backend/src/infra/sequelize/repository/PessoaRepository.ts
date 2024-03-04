import { Pessoa } from '../../../domain/implementations/entity/objectValues/Pessoa';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import PessoaSequelizeModel from '../models/PessoaSequelizeModel';

export class PessoaRepository {

  public async criar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<Pessoa> {
    const pessoaDb = await db.models.pessoa.create<PessoaSequelizeModel>(pPessoa.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Pessoa(pessoaDb));
  }

  public async editar(pUnitOfWork: UnitOfWork, pPessoa: Pessoa): Promise<boolean> {
    const result = await db.models.pessoa.update<PessoaSequelizeModel>({
      nome: pPessoa.nome,
      nome_fantasia: pPessoa.nome_fantasia,
      nome_mae: pPessoa.nome_mae,
      inscrição_estadual: pPessoa.inscrição_estadual,
      inscrição_municipal: pPessoa.inscrição_municipal,
    }, {
      where: {
        identificacao: pPessoa.identificacao
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result.length > 0)
  }

  public async excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string): Promise<void> {
    await db.models.pessoa.destroy<PessoaSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
      },
      transaction: pUnitOfWork.getTransition(),
    });
  }
}