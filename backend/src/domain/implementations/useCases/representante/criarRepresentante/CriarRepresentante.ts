import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IRepresentanteRepository } from '../../../../protocols/repository/representanteRepository';
import { Representante } from '../../../entity/objectValues/Representante';
import { CriarRepresentanteOutput } from './CriarRepresentanteOutput';
import { CriarRepresentanteInput } from '../../representante/criarRepresentante/CriarRepresentanteInput';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { CriarClienteInput } from '../../cliente/criarCliente/CriarClienteInput';

export class CriarRepresentante {
  constructor(private representanteRepository: IRepresentanteRepository, private clienteRepository: IClienteRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputRepresentante: CriarRepresentanteInput, pInputCliente: CriarClienteInput): Promise<CriarRepresentanteOutput | null> {

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
      const representanteExist = await this.representanteRepository.representanteExist(representante.identificacao, cliente.identificacao);
      if (!representanteExist) {
        const representanteDb = await this.representanteRepository.criar(pUnitWork, representante);
        return new CriarRepresentanteOutput(representanteDb);
      }
      return null;
    }
    return null;
  }
}