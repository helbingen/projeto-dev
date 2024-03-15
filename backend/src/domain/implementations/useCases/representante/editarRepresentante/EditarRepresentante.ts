import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IRepresentanteRepository } from '../../../../protocols/repository/representanteRepository';
import { Representante } from '../../../entity/objectValues/Representante';
import { EditarRepresentanteInput } from '../../representante/editarRepresentante/EditarRepresentanteInput';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';

export class EditarRepresentante {
  constructor(private representanteRepository: IRepresentanteRepository, private clienteRepository: IClienteRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputRepresentante: EditarRepresentanteInput): Promise<boolean> {

    const cliente = new Cliente({
      identificacao: pInputRepresentante.idCliente,
    });

    const representante = new Representante({
      nome: pInputRepresentante.nome,
      identificacao: pInputRepresentante.identificacao,
      id_cliente: cliente.identificacao,
    });
    const clienteExist = await this.clienteRepository.listarClientePorId(cliente.identificacao);
    if (clienteExist) {
      const representanteExist = await this.representanteRepository.listarRepresentantePorId(representante.identificacao, cliente.identificacao);
      if (representanteExist) {
        await this.representanteRepository.editar(pUnitWork, representante);
        return true;
      }
      return false;
    }
    return false;
  }
}