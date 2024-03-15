import { IRepresentanteRepository } from '../../../../protocols/repository/representanteRepository';
import { Representante } from '../../../entity/objectValues/Representante';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { ListarRepresentantePorIdInput } from './ListarRepresentantePorIdInput';
import { ListarRepresentantePorIdOutput } from './ListarRepresentantePorIdOutput';

export class ListarRepresentantePorId {
  constructor(private representanteRepository: IRepresentanteRepository) { }

  public async execute(pInputRepresentante: ListarRepresentantePorIdInput): Promise<ListarRepresentantePorIdOutput | null> {

    const cliente = new Cliente({
      identificacao: pInputRepresentante.idCliente,
    });

    const representante = new Representante({
      identificacao: pInputRepresentante.identificacao,
      id_cliente: cliente.identificacao,
    });
    const representanteDb = await this.representanteRepository.listarRepresentantePorId(representante.identificacao, representante.id_cliente);
    if (representanteDb) {
      return new ListarRepresentantePorIdOutput(representanteDb);
    }
    return null;
  }
}