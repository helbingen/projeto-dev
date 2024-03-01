import { Transaction } from 'sequelize/types';
import IUnitOfWork from '../UnitOfWork';
import ErroInterno from '../../../implementations/entity/errors/ErroInterno';
import db from '../../../../infra/sequelize/db';

export default class UnitOfWork implements IUnitOfWork {
  public readonly tokenAuthorization: string;

  private transition: Transaction | undefined;

  constructor(pTokenAuthorization: string) {
    this.tokenAuthorization = pTokenAuthorization;
  }

  public async init(): Promise<void> {
    if (this.transition !== undefined) {
      throw new ErroInterno('Operação já possui uma transition');
    }
    this.transition = await db.sequelize.transaction();
  }

  public async commit(): Promise<void> {
    if (this.transition) {
      await this.transition.commit();
      this.transition = undefined;
    }
  }

  public async rollBack(): Promise<void> {
    if (this.transition) {
      await this.transition.rollback();
      this.transition = undefined;
    }
  }

  public getTransition(): Transaction | undefined {
    return this.transition;
  }

  public getTokens(): { tokenAuthorization: string; } {
    return {
      tokenAuthorization: this.tokenAuthorization,
    };
  }
}
