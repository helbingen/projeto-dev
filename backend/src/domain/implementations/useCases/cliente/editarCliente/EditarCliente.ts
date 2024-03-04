import { PessoaRepository } from '../../../../../infra/sequelize/repository/PessoaRepository';
import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { Pessoa } from '../../../entity/objectValues/Pessoa';
import { EditarPessoaInput } from '../../pessoa/editarPessoa/EditarPessoaInput';
import { EditarClienteInput } from './EditarClienteInput';

export class EditarCliente {
  constructor(private clienteRepository: IClienteRepository, private pessoaRepository: PessoaRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputCliente: EditarClienteInput, pInputPessoa: EditarPessoaInput): Promise<boolean> {
    const pessoa = new Pessoa({
      identificacao: pInputPessoa.identificacao,
      inscrição_estadual: pInputPessoa.inscricaoEstadual,
      inscrição_municipal: pInputPessoa.inscricaoMunicipal,
      nome: pInputPessoa.nome,
      nome_fantasia: pInputPessoa.nomeFantasia,
      nome_mae: pInputPessoa.nomeMae,
    })

    const cliente = new Cliente({
      identificacao: pessoa.identificacao,
      situacao: pInputCliente.situacao,
      data_cadastro: new Date(),
    });
    const resultEditarPessoa = await this.pessoaRepository.editar(pUnitWork, pessoa);
    const resultEditarCliente = await this.clienteRepository.editar(pUnitWork, cliente);
    if (!resultEditarCliente || !resultEditarPessoa) {
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }
}