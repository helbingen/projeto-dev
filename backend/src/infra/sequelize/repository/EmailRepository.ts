import { Email } from '../../../domain/implementations/entity/objectValues/Email';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import db from '../db';
import EmailSequelizeModel from '../models/EmailSequelizeModel';

export class EmailRepository {

  public async criar(pUnitOfWork: UnitOfWork, pEmail: Email): Promise<Email> {
    const emailDb = await db.models.email.create<EmailSequelizeModel>(pEmail.gerarObjCriar(), {
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(new Email(emailDb));
  }

  public async listarEmailPorId(pIdentificacao: string, pEmail: string): Promise<Email | null> {
    const emailDb = await db.models.email.findOne<EmailSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
        email: pEmail,
      }
    });
    if (emailDb) {
      return new Email(emailDb);
    }
    return null;
  }

  public async editar(pUnitOfWork: UnitOfWork, pEmail: Email): Promise<boolean> {
    const result = await db.models.email.update<EmailSequelizeModel>({
      email: pEmail.email,
      is_principal: pEmail.is_principal,
    },
      {
        where: {
          identificacao: pEmail.identificacao,
          email: pEmail.email,
        },
        transaction: pUnitOfWork.getTransition(),
      });
    return Promise.resolve(result.length > 0);
  }

  public async excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pEmail: string): Promise<boolean> {
    const result = await db.models.email.destroy<EmailSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
        email: pEmail,
      },
      transaction: pUnitOfWork.getTransition(),
    });
    return Promise.resolve(result > 0);
  }

  public async listarTodos(pIdentificacao: string): Promise<Email[]> {
    const emailDb = await db.models.email.findAll<EmailSequelizeModel>({
      where: {
        identificacao: pIdentificacao,
      }
    });
    return emailDb.map((email) => new Email(email))
  }
}