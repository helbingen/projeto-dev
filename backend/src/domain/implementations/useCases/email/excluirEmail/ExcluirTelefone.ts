import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { Email } from '../../../entity/objectValues/Email';
import { IEmailRepository } from '../../../../protocols/repository/emailRepository';
import { ExcluirEmailInput } from './ExcluirEmailInput';

export class ExcluirEmail {
  constructor(private emailRepository: IEmailRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputEmail: ExcluirEmailInput): Promise<boolean> {

    const email = new Email({
      identificacao: pInputEmail.identificacao,
      email: pInputEmail.email,
    })

    const emailExist = await this.emailRepository.isEmailExist(email.identificacao, email.email);
    if (emailExist) {
      await this.emailRepository.excluir(pUnitWork, email.identificacao, email.email);
      return true
    }
    return false;
  }
}