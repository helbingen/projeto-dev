import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { ITipoContatoRepository } from '../../../../protocols/repository/tipoContatoRepository';
import { TipoContato } from '../../../entity/objectValues/TipoContato';
import { ListarContatoOutput } from './ListarContatoOutput';

export class ListarContato {
  constructor(private tipoContatoRepository: ITipoContatoRepository) { }

  public async execute(): Promise<ListarContatoOutput[]> {

    const listarContatoOutputArray: ListarContatoOutput[] = [];
    const contatoDb = await this.tipoContatoRepository.listarTodos();

    for (let i = 0; i < contatoDb.length; i++) {
      const contato = contatoDb[i];
      const output = new ListarContatoOutput(contato);
      listarContatoOutputArray.push(output);
    }
    return listarContatoOutputArray;
  }
}