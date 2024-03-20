import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { EditarContatoOutput } from './EditarContatoOutput';
import { EditarContatoInput } from './EditarContatoInput';
import { ITipoContatoRepository } from '../../../../protocols/repository/tipoContatoRepository';
import { TipoContato } from '../../../entity/objectValues/TipoContato';
import { uuidv4 } from 'uuidv7';

export class EditarContato {
  constructor(private tipoContatoRepository: ITipoContatoRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputEditarContato: EditarContatoInput): Promise<EditarContatoOutput | null> {

    const contato = new TipoContato({
      idContato: pInputEditarContato.idContato,
      descricaoContato: pInputEditarContato.descricaoContato,
    })

    const contatoExist = await this.tipoContatoRepository.listarPorId(contato.idContato);
    if (contatoExist) {
      await this.tipoContatoRepository.editar(pUnitWork, contato);
      return new EditarContatoOutput(contato);
    }
    return null;
  }
}