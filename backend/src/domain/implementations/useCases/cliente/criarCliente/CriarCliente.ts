import { request } from 'express';
import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IClienteRepository } from '../../../../protocols/repository/clienteRepository';
import { Cliente } from '../../../entity/objectValues/Cliente';
import { CriarClienteInput } from './CriarClienteInput';
import { CriarClienteOutput } from './CriarClienteOutput';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { Pessoa } from '../../../entity/objectValues/Pessoa';
import { CriarPessoaInput } from '../../pessoa/criarPessoa/CriarPessoaInput';

export class CriarCliente {
  constructor(private clienteRepository: IClienteRepository, private pessoaRepository: IPessoaRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputPessoa: CriarPessoaInput): Promise<CriarClienteOutput> {

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
      data_cadastro: new Date(),
    });
    await this.pessoaRepository.criar(pUnitWork, pessoa);
    await this.clienteRepository.criar(pUnitWork, cliente);
    return new CriarClienteOutput(cliente);
  }
}