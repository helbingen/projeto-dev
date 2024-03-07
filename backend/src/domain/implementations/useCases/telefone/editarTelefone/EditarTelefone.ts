import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { EditarTelefoneOutput } from './EditarTelefoneOutput';
import { Telefone } from '../../../entity/objectValues/Telefone';
import { EditarTelefoneInput } from './EditarTelefoneInput';
import { ITelefoneRepository } from '../../../../protocols/repository/telefoneRepository';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { ListarPessoaInput } from '../../pessoa/listarPessoa/ListarPessoaInput';

export class EditarTelefone {
  constructor(private pessoaRepository: IPessoaRepository, private telefoneRepository: ITelefoneRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputPessoa: ListarPessoaInput, pInputTelefone: EditarTelefoneInput): Promise<EditarTelefoneOutput | null> {

    const telefone = new Telefone({
      identificacao: pInputPessoa.identificacao,
      numero: pInputTelefone.numero,
      is_principal: pInputTelefone.isPrincipal
    })

    const pessoaExist = await this.pessoaRepository.buscarPessoaPorIdentificacao(pInputPessoa.identificacao);
    const enderecoExist = await this.telefoneRepository.isTelefoneExist(telefone.identificacao, telefone.numero);

    if (pessoaExist) {
      if (enderecoExist) {
        await this.telefoneRepository.editar(pUnitWork, telefone);
        return new EditarTelefoneOutput(telefone);
      }
      return null;
    }
    return null;
  }
}