import { TipoContato } from '../../../domain/implementations/entity/objectValues/TipoContato';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import TipoContatoSequelizeModel from '../models/TipoContatoSequelizeModel';


export class TipoContatoRepository {

  public async criar(pUnitOfWork: UnitOfWork, pTipoContato: TipoContato): Promise<TipoContato> {
    const tipoContatoDb = await db.models.tipoContato.create<TipoContatoSequelizeModel>(pTipoContato.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new TipoContato(tipoContatoDb));

  }
  public async editar(pUnitOfWork: UnitOfWork, pTipoContato: TipoContato): Promise<boolean> {
    const result = await db.models.tipoContato.update<TipoContatoSequelizeModel>({
      descricaoContato: pTipoContato.descricaoContato,
    },
      {
        where: {
          idContato: pTipoContato.idContato,
        },
        transaction: pUnitOfWork.getTransition(),
      });
    return Promise.resolve(result.length > 0);
  }

  public async excluir(pUnitOfWork: UnitOfWork, idContato: string): Promise<boolean> {
    const result = await db.models.tipoContato.destroy<TipoContatoSequelizeModel>({
      where: {
        idContato: idContato,
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result > 0);
  }

  public async listarTodos(): Promise<TipoContato[]> {
    const tipoContatoDb = await db.models.tipoContato.findAll<TipoContatoSequelizeModel>();
    return tipoContatoDb.map((tipoContato) => new TipoContato(tipoContato))
  }

  public async listarPorDescricao(pDescricao: string): Promise<TipoContato | null> {
    const tipoContatoDb = await db.models.tipoContato.findOne<TipoContatoSequelizeModel>({
      where: {
        descricaoContato: pDescricao,
      },
    });
    if (tipoContatoDb) {
      return Promise.resolve(new TipoContato(tipoContatoDb));
    }
    return null
  }

  public async listarPorId(idContato: string): Promise<TipoContato | null> {
    const tipoContatoDb = await db.models.tipoContato.findOne<TipoContatoSequelizeModel>({
      where: {
        idContato: idContato,
      },
    });
    if (tipoContatoDb) {
      return Promise.resolve(new TipoContato(tipoContatoDb));
    }
    return null
  }

}