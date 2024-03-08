import { IContaRepository } from '../../../../protocols/repository/contaRepository';
import { Conta } from '../../../entity/objectValues/Conta';
import { ListarContaInput } from './ListarContaInput';
import { ListarContaOutput } from './ListarContaOutput';

export class ListarConta {
  constructor(private contaRepository: IContaRepository) {
  }

  public async execute(pInputConta: ListarContaInput): Promise<ListarContaOutput | null> {
    const conta = new Conta({
      email: pInputConta.email,
    })
    const contaDb = await this.contaRepository.listarContaPorEmail(conta.email);
    if (contaDb) {
      return Promise.resolve(new ListarContaOutput(contaDb));
    }
    return null;

  }
}