import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { ExcluirClienteInput } from './ExcluirClienteInput';

export class ExcluirCliente {
  constructor(private clienteRepository: IClienteRepository, private pessoaRepository: IPessoaRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputCliente: ExcluirClienteInput): Promise<boolean> {
    const cliente = new Cliente({
      identificacao: pInputCliente.identificacao,
    });
    console.log(cliente.identificacao);
    const pessoaExist = await this.pessoaRepository.buscarPessoaPorIdentificacao(cliente.identificacao);
    if (pessoaExist) {
      await this.pessoaRepository.excluir(pUnitWork, cliente.identificacao);
      await this.clienteRepository.excluir(pUnitWork, cliente.identificacao);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}