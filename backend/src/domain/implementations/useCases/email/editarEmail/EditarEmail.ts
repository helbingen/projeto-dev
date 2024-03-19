import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { EditarEmailOutput } from './EditarEmailOutput';
import { Email } from '../../../entity/objectValues/Email';
import { EditarEmailInput } from './EditarEmailInput';
import { IEmailRepository } from '../../../../protocols/repository/emailRepository';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { ListarPessoaInput } from '../../pessoa/listarPessoa/ListarPessoaInput';

export class EditarEmail {
  constructor(private pessoaRepository: IPessoaRepository, private emailRepository: IEmailRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputPessoa: ListarPessoaInput, pInputEmail: EditarEmailInput): Promise<EditarEmailOutput | null> {

    const email = new Email({
      identificacao: pInputEmail.identificacao,
      email: pInputEmail.email,
      is_principal: pInputEmail.isPrincipal
    })

    const pessoaExist = await this.pessoaRepository.buscarPessoaPorIdentificacao(pInputPessoa.identificacao);
    const emailExist = await this.emailRepository.listarEmailPorId(email.identificacao, email.email);
    if (pessoaExist) {
      if (emailExist) {
        await this.emailRepository.editar(pUnitWork, email);
        return new EditarEmailOutput(email);
      }
      return null;
    }
    return null;
  }
}