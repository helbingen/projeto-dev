import { request } from 'express';
import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { Pessoa } from '../../../entity/objectValues/Pessoa';
import { CriarPessoaInput } from './CriarPessoaInput';
import { CriarPessoaOutput } from './CriarPessoaOutput';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';

export class CriarPessoa {
  constructor(private pessoaRepository: IPessoaRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInput: CriarPessoaInput): Promise<CriarPessoaOutput> {
    const pessoa = new Pessoa({
      identificacao: pInput.identificacao,
      nome: pInput.nome,
      nome_fantasia: pInput.nomeFantasia,
      nome_mae: pInput.nomeMae,
      inscrição_estadual: pInput.inscricaoEstadual,
      inscrição_municipal: pInput.inscricaoMunicipal,
    });
    await this.pessoaRepository.criar(pUnitWork, pessoa, request);
    return new CriarPessoaOutput(pessoa);
  }
}