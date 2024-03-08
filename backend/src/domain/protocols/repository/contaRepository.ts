import { Conta } from '../../implementations/entity/objectValues/Conta';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IContaRepository {
  criar(pUnitOfWork: UnitOfWork, pConta: Conta): Promise<Conta>;
  listarContaPorEmail(pEmail: string): Promise<Conta | null>;
  verificaSenhaLogin(pEmail: string, pSenha: string): Promise<Conta | null>;
  editar(pUnitOfWork: UnitOfWork, pConta: Conta): Promise<boolean>;
}