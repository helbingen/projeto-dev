
import { ITelefoneRepository } from '../../../../protocols/repository/telefoneRepository';
import { Telefone } from '../../../entity/objectValues/Telefone';
import { ListarTelefonePorIdInput } from './ListarTelefoneInput';

export class ListarTelefonePorId {
  constructor(private telefoneRepository: ITelefoneRepository) {
  }

  public async execute(pInputTelefone: ListarTelefonePorIdInput): Promise<Telefone | null> {
    const telefoneDb = await this.telefoneRepository.listarTelefonePorId(pInputTelefone.identificacao, pInputTelefone.numero);
    if (telefoneDb) {
      return new Telefone(telefoneDb);
    }
    return null;
  }

}