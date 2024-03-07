import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { Telefone } from '../../../entity/objectValues/Telefone';
import { ITelefoneRepository } from '../../../../protocols/repository/telefoneRepository';
import { ExcluirTelefoneInput } from './ExcluirTelefoneInput';

export class ExcluirTelefone {
  constructor(private telefoneRepository: ITelefoneRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputTelefone: ExcluirTelefoneInput): Promise<boolean> {

    const telefone = new Telefone({
      identificacao: pInputTelefone.identificacao,
      numero: pInputTelefone.numero,
    })

    const telefoneExist = await this.telefoneRepository.isTelefoneExist(telefone.identificacao, telefone.numero);
    if (telefoneExist) {
      await this.telefoneRepository.excluir(pUnitWork, telefone.identificacao, telefone.numero);
      return true
    }
    return false;
  }
}