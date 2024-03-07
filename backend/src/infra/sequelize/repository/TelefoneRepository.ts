import { Telefone } from '../../../domain/implementations/entity/objectValues/Telefone';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import TelefoneSequelizeModel from '../models/TelefoneSequelizeModel';

export class TelefoneRepository {

  public async criar(pUnitOfWork: UnitOfWork, pTelefone: Telefone): Promise<Telefone> {
    const telefoneDb = await db.models.telefone.create<TelefoneSequelizeModel>(pTelefone.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Telefone(telefoneDb));
  }

  public async isTelefoneExist(pIdentificacao: string, pNumero: string): Promise<boolean> {
    const telefoneDb = await db.models.telefone.findOne<TelefoneSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
        numero: pNumero,
      }
    });
    if (telefoneDb) {
      return true;
    }
    return false;
  }

  public async editar(pUnitOfWork: UnitOfWork, pTelefone: Telefone): Promise<boolean> {
    const result = await db.models.telefone.update<TelefoneSequelizeModel>({
      numero: pTelefone.numero,
      is_principal: pTelefone.is_principal,
    },
      {
        where: {
          identificacao: pTelefone.identificacao,
          numero: pTelefone.numero,
        },
        transaction: pUnitOfWork.getTransition(),
      });
    return Promise.resolve(result.length > 0);
  }

  public async excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pNumero: string): Promise<boolean> {
    const result = await db.models.telefone.destroy<TelefoneSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
        numero: pNumero,
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result > 0);
  }

  public async listarTodos(pIdentificacao: string): Promise<Telefone[]> {
    const telefoneDb = await db.models.telefone.findAll<TelefoneSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
      }
    });
    return telefoneDb.map((telefone) => new Telefone(telefone))
  }
}