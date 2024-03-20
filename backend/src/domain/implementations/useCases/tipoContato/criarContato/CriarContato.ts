import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { CriarContatoOutput } from './CriarContatoOutput';
import { CriarContatoInput } from './CriarContatoInput';
import { ITipoContatoRepository } from '../../../../protocols/repository/tipoContatoRepository';
import { TipoContato } from '../../../entity/objectValues/TipoContato';
import { uuidv4 } from 'uuidv7';

export class CriarContato {
  constructor(private tipoContatoRepository: ITipoContatoRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputCriarContato: CriarContatoInput): Promise<CriarContatoOutput | null> {

    const contato = new TipoContato({
      idContato: uuidv4(),
      descricaoContato: pInputCriarContato.descricaoContato,
    })

    const contatoExist = await this.tipoContatoRepository.listarPorDescricao(contato.descricaoContato);
    if (!contatoExist) {
      await this.tipoContatoRepository.criar(pUnitWork, contato);
      return new CriarContatoOutput(contato);
    }
    return null;
  }
}