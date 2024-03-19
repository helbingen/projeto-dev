import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { CriarTelefoneOutput } from './CriarTelefoneOutput';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { Telefone } from '../../../entity/objectValues/Telefone';
import { CriarTelefoneInput } from './CriarTelefoneInput';
import { ListarPessoaInput } from '../../pessoa/listarPessoa/ListarPessoaInput';
import { ITelefoneRepository } from '../../../../protocols/repository/telefoneRepository';

export class CriarTelefone {
  constructor(private pessoaRepository: IPessoaRepository, private telefoneRepository: ITelefoneRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputPessoa: ListarPessoaInput, pInputTelefone: CriarTelefoneInput): Promise<CriarTelefoneOutput | null> {

    const telefone = new Telefone({
      identificacao: pInputPessoa.identificacao,
      numero: pInputTelefone.numero,
      is_principal: pInputTelefone.isPrincipal
    })

    const pessoaExist = await this.pessoaRepository.buscarPessoaPorIdentificacao(pInputPessoa.identificacao);
    const telefoneExist = await this.telefoneRepository.listarTelefonePorId(telefone.identificacao, telefone.numero);
    if (pessoaExist) {
      if (!telefoneExist) {
        await this.telefoneRepository.criar(pUnitWork, telefone);
        return new CriarTelefoneOutput(telefone);
      }
      return null;
    }
    return null;
  }
}