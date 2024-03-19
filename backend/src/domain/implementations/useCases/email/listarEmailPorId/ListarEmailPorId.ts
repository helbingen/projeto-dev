import { IEmailRepository } from '../../../../protocols/repository/emailRepository';
import { Email } from '../../../entity/objectValues/Email';
import { ListarEmailPorIdInput } from './ListarEmailPorIdInput';

export class ListarEmailPorId {
  constructor(private emailRepository: IEmailRepository) {
  }

  public async execute(pInputEmail: ListarEmailPorIdInput): Promise<Email | null> {
    const emailDb = await this.emailRepository.listarEmailPorId(pInputEmail.identificacao, pInputEmail.email);
    if (emailDb) {
      return new Email(emailDb);
    }
    return null;
  }
}