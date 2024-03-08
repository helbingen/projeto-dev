import { Conta } from '../../../domain/implementations/entity/objectValues/Conta';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import ContaSequelizeModel from '../models/ContaSequelizeModel';

export class ContaRepository {

  public async criar(pUnitOfWork: UnitOfWork, pConta: Conta): Promise<Conta> {
    const contaDb = await db.models.conta.create<ContaSequelizeModel>(pConta.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Conta(contaDb));
  }

  public async listarContaPorEmail(pEmail: string): Promise<Conta | null> {
    const contaDb = await db.models.conta.findOne<ContaSequelizeModel>({
      where: {
        email: pEmail,
      }
    });
    if (contaDb) {
      return Promise.resolve(new Conta(contaDb));
    }
    return null;
  }

  public async verificaSenhaLogin(pEmail: string, pSenha: string): Promise<Conta | null> {
    const contaDb = await db.models.conta.findOne<ContaSequelizeModel>({
      where: {
        email: pEmail,
        senha: pSenha,
      }
    });
    if (contaDb) {
      return Promise.resolve(new Conta(contaDb));
    }
    return null;
  }

  public async editar(pUnitOfWork: UnitOfWork, pConta: Conta): Promise<boolean> {
    const result = await db.models.conta.update<ContaSequelizeModel>({
      nome: pConta.nome,
      senha: pConta.senha,
    },
      {
        where: {
          email: pConta.email,
        },
        transaction: pUnitOfWork.getTransition(),
      });
    return Promise.resolve(result.length > 0);
  }
}