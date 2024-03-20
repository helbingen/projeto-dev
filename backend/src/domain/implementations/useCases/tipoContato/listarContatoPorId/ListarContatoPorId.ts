import { ITipoContatoRepository } from '../../../../protocols/repository/tipoContatoRepository';
import { TipoContato } from '../../../entity/objectValues/TipoContato';
import { ListarContatoPorIdInput } from './ListarContatoPorIdInput';
import { ListarContatoPorIdOutput } from './ListarContatoPorIdOutput';

export class ListarContatoPorId {
  constructor(private tipoContatoRepository: ITipoContatoRepository) { }

  public async execute(pInputListarContatoPorId: ListarContatoPorIdInput): Promise<ListarContatoPorIdOutput | null> {

    const contato = new TipoContato({
      descricaoContato: pInputListarContatoPorId.descricao,
    })
    const result = await this.tipoContatoRepository.listarPorDescricao(contato.descricaoContato);
    if (result) {
      return new ListarContatoPorIdOutput(contato);
    }
    return null;
  }
}