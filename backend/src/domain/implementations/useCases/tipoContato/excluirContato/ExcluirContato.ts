import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { ITipoContatoRepository } from '../../../../protocols/repository/tipoContatoRepository';
import { TipoContato } from '../../../entity/objectValues/TipoContato';
import { ExcluirContatoInput } from './ExcluirContatoInput';

export class ExcluirContato {
  constructor(private tipoContatoRepository: ITipoContatoRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputExcluirContato: ExcluirContatoInput): Promise<boolean> {

    const contato = new TipoContato({
      idContato: pInputExcluirContato.idContato,
    })

    const contatoExist = await this.tipoContatoRepository.listarPorId(contato.idContato);
    if (contatoExist) {
      return await this.tipoContatoRepository.excluir(pUnitWork, contato.idContato);
    }
    return false;
  }
}