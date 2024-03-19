import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { CriarEmailOutput } from './CriarEmailOutput';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { Email } from '../../../entity/objectValues/Email';
import { CriarEmailInput } from './CriarEmailInput';
import { ListarPessoaInput } from '../../pessoa/listarPessoa/ListarPessoaInput';
import { IEmailRepository } from '../../../../protocols/repository/emailRepository';

export class CriarEmail {
  constructor(private pessoaRepository: IPessoaRepository, private emailRepository: IEmailRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputPessoa: ListarPessoaInput, pInputEmail: CriarEmailInput): Promise<CriarEmailOutput | null> {

    const email = new Email({
      identificacao: pInputPessoa.identificacao,
      email: pInputEmail.email,
      is_principal: pInputEmail.isPrincipal
    })

    const pessoaExist = await this.pessoaRepository.buscarPessoaPorIdentificacao(pInputPessoa.identificacao);
    const emailExist = await this.emailRepository.listarEmailPorId(email.identificacao, email.email);
    if (pessoaExist) {
      if (!emailExist) {
        await this.emailRepository.criar(pUnitWork, email);
        return new CriarEmailOutput(email);
      }
      return null;
    }
    return null;
  }
}