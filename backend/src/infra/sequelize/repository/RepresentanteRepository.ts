import { Representante } from '../../../domain/implementations/entity/objectValues/Representante';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import RepresentanteSequelizeModel from '../models/RepresentanteSequelizeModel';

export class RepresentanteRepository {

  public async criar(pUnitOfWork: UnitOfWork, pRepresentante: Representante): Promise<Representante> {
    console.log(pRepresentante)
    const representanteDb = await db.models.representante.create<RepresentanteSequelizeModel>(pRepresentante.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Representante(representanteDb));
  }

  public async editar(pUnitOfWork: UnitOfWork, pRepresentante: Representante): Promise<boolean> {
    const result = await db.models.representante.update<RepresentanteSequelizeModel>({
      nome: pRepresentante.nome,
    }, {
      where: {
        identificacao: pRepresentante.identificacao
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result.length > 0);
  }

  public async excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pIdCliente: string): Promise<boolean> {
    const result = await db.models.representante.destroy<RepresentanteSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
        id_cliente: pIdCliente,
      },
      transaction: pUnitOfWork.getTransition(),

    });
    return Promise.resolve(result > 0);
  }

  public async listarTodosPorCliente(pIdCliente: string): Promise<Representante[]> {
    const representanteDb = await db.models.representante.findAll<RepresentanteSequelizeModel>({
      where: {
        id_cliente: pIdCliente,
      }
    });
    return representanteDb.map((representante) => new Representante(representante))
  }

  public async representanteExist(pIdentificacao: string, pIdCliente: string): Promise<boolean> {
    const representanteDb = await db.models.representante.findOne<RepresentanteSequelizeModel>({
      where: {
        id_cliente: pIdCliente,
        identificacao: pIdentificacao,
      }
    });
    if (representanteDb) {
      return true;
    }
    return false;
  }
}