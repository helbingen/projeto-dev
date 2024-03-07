import { ListarEmailOutput } from './ListarEmailOutput';
import { ListarEmailInput } from './ListarEmailInput';
import { IEmailRepository } from '../../../../protocols/repository/emailRepository';

export class ListarEmail {
  constructor(private emailRepository: IEmailRepository) {
  }

  public async execute(pInputEmail: ListarEmailInput): Promise<ListarEmailOutput[]> {
    const emailDb = await this.emailRepository.listarTodos(pInputEmail.identificacao);
    let listaEmail: ListarEmailOutput[] = [];
    for (let email of emailDb) {
      listaEmail.push(email);
    }
    return listaEmail;
  }
}