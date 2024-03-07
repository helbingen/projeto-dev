import { ListarTelefoneOutput } from './ListarTelefoneOutput';
import { ListarTelefoneInput } from './ListarTelefoneInput';
import { ITelefoneRepository } from '../../../../protocols/repository/telefoneRepository';

export class ListarTelefone {
  constructor(private telefoneRepository: ITelefoneRepository) {
  }

  public async execute(pInputTelefone: ListarTelefoneInput): Promise<ListarTelefoneOutput[]> {
    const telefoneDb = await this.telefoneRepository.listarTodos(pInputTelefone.identificacao);
    let listaTelefone: ListarTelefoneOutput[] = [];
    for (let telefone of telefoneDb) {
      listaTelefone.push(telefone);
    }
    return listaTelefone;
  }
}