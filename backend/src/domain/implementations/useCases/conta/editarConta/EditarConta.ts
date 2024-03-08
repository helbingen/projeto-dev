import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IContaRepository } from '../../../../protocols/repository/contaRepository';
import { Conta } from '../../../entity/objectValues/Conta';
import senhaUtil from '../../../utils/senhaUtil';
import { EditarContaInput } from './EditarContaInput';

export class EditarConta {
  constructor(private contaRepository: IContaRepository) {
  }

  public async execute(pUnitOfWork: UnitOfWork, pInputConta: EditarContaInput): Promise<boolean> {
    const conta = new Conta({
      nome: pInputConta.nome,
      email: pInputConta.email,
      senha: senhaUtil.criptografarSenha(pInputConta.senha),
    })
    const isContaExist = await this.contaRepository.listarContaPorEmail(conta.email);
    if (isContaExist) {
      const contaDb = await this.contaRepository.editar(pUnitOfWork, conta)
      return contaDb;
    }
    return false;
  }
}