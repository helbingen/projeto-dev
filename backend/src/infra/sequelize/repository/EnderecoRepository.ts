import { Endereco } from '../../../domain/implementations/entity/objectValues/Endereco';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import EnderecoSequelizeModel from '../models/EnderecoSequelizeModel';

export class EnderecoRepository {

  public async criar(pUnitOfWork: UnitOfWork, pEndereco: Endereco): Promise<Endereco> {
    const enderecoDb = await db.models.endereco.create<EnderecoSequelizeModel>(pEndereco.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Endereco(enderecoDb));
  }

  public async isEnderecoExist(pCep: string, pIdentificacao: string): Promise<boolean> {
    const enderecoDb = await db.models.endereco.findOne<EnderecoSequelizeModel>({
      where: {
        cep: pCep,
        identificacao: pIdentificacao,
      }
    });
    if (enderecoDb) {
      return true;
    }
    return false;
  }

  public async editar(pUnitOfWork: UnitOfWork, pEndereco: Endereco, pIdentificacao: string): Promise<boolean> {
    const result = await db.models.endereco.update<EnderecoSequelizeModel>(pEndereco.gerarObjetoAtualizar(), {
      where: {
        cep: pEndereco.cep,
        identificacao: pIdentificacao,
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result.length > 0);
  }

  public async excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pCep: string): Promise<boolean> {
    const result = await db.models.endereco.destroy<EnderecoSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
        cep: pCep,
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result > 0);
  }

  public async listarTodos(pIdentificacao: string): Promise<Endereco[]> {
    const enderecoDb = await db.models.endereco.findAll<EnderecoSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
      }
    });
    return enderecoDb.map((endereco) => new Endereco(endereco))
  }
}