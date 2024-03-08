import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IContaRepository } from '../../../../protocols/repository/contaRepository';
import { Conta } from '../../../entity/objectValues/Conta';
import senhaUtil from '../../../utils/senhaUtil';
import { CriarContaInput } from './CriarContaInput';
import { CriarContaOutput } from './CriarContaOutput';

export class CriarConta {
  constructor(private contaRepository: IContaRepository) {
  }

  public async execute(pUnitOfWork: UnitOfWork, pInputConta: CriarContaInput): Promise<CriarContaOutput | boolean> {
    const conta = new Conta({
      email: pInputConta.email,
      nome: pInputConta.nome,
      senha: senhaUtil.criptografarSenha(pInputConta.senha),
    })
    const isContaExist = await this.contaRepository.listarContaPorEmail(conta.email);
    if (!isContaExist) {
      const contaDb = await this.contaRepository.criar(pUnitOfWork, conta)
      return new CriarContaOutput(contaDb);
    }
    return false;
  }
}