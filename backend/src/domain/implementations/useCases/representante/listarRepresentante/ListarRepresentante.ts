import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IRepresentanteRepository } from '../../../../protocols/repository/representanteRepository';
import { Representante } from '../../../entity/objectValues/Representante';
import { ListarRepresentanteInput } from '../../representante/listarRepresentante/ListarRepresentanteInput';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { ListarRepresentanteOutput } from './ListarRepresentanteOutput';

export class ListarRepresentante {
  constructor(private representanteRepository: IRepresentanteRepository) { }

  public async execute(pInputRepresentante: ListarRepresentanteInput): Promise<ListarRepresentanteOutput[]> {

    const cliente = new Cliente({
      identificacao: pInputRepresentante.idCliente,
    });

    const representante = new Representante({
      identificacao: pInputRepresentante.identificacao,
      id_cliente: cliente.identificacao,
    });
    const representanteDb = await this.representanteRepository.listarTodosPorCliente(representante.id_cliente);
    return representanteDb;
  }
}