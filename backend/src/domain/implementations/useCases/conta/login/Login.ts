import { IContaRepository } from '../../../../protocols/repository/contaRepository';
import { Conta } from '../../../entity/objectValues/Conta';
import senhaUtil from '../../../utils/senhaUtil';
import { LoginInput } from './LoginInput';
import { LoginOutput } from './LoginOutput';

export class Login {
  constructor(private contaRepository: IContaRepository) {
  }

  public async execute(pInputConta: LoginInput): Promise<LoginOutput | null> {
    const conta = new Conta({
      email: pInputConta.email,
      senha: senhaUtil.criptografarSenha(pInputConta.senha),
    })
    const isContaExist = await this.contaRepository.listarContaPorEmail(conta.email);
    if (isContaExist) {
      const contaDb = await this.contaRepository.verificaSenhaLogin(conta.email, conta.senha);
      if (contaDb) {
        return new LoginOutput(contaDb);
      }
      return null;
    }
    return null;
  }
}