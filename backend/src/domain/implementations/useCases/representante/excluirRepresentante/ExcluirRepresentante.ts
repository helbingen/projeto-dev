import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IRepresentanteRepository } from '../../../../protocols/repository/representanteRepository';
import { Representante } from '../../../entity/objectValues/Representante';
import { ExcluirRepresentanteInput } from '../../representante/excluirRepresentante/ExcluirRepresentanteInput';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';

export class ExcluirRepresentante {
  constructor(private representanteRepository: IRepresentanteRepository, private clienteRepository: IClienteRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputRepresentante: ExcluirRepresentanteInput): Promise<boolean> {

    const cliente = new Cliente({
      identificacao: pInputRepresentante.idCliente,
    });

    const representante = new Representante({
      identificacao: pInputRepresentante.identificacao,
      id_cliente: cliente.identificacao,
    });
    const clienteExist = await this.clienteRepository.listarClientePorId(cliente.identificacao);
    if (clienteExist) {
      const representanteExist = await this.representanteRepository.listarRepresentantePorId(representante.identificacao, cliente.identificacao);
      if (representanteExist) {
        await this.representanteRepository.excluir(pUnitWork, representante.identificacao, representante.id_cliente);
        return true;
      }
      return false;
    }
    return false;
  }
}