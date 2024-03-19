import { Email } from '../../implementations/entity/objectValues/Email';
import UnitOfWork from '../models/entity/UnitOfWork';

export interface IEmailRepository {
  criar(pUnitOfWork: UnitOfWork, pEmail: Email): Promise<Email>;
  listarEmailPorId(pIdentificacao: string, pEmail: string): Promise<Email | null>
  editar(pUnitOfWork: UnitOfWork, pEmail: Email): Promise<boolean>;
  excluir(pUnitOfWork: UnitOfWork, pIdentificacao: string, pEmail: string): Promise<boolean>
  listarTodos(pIdentificacao: string): Promise<Email[]>
}