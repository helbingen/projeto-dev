import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';

import { EditarEnderecoOutput } from './EditarEnderecoOutput';
import { IPessoaRepository } from '../../../../protocols/repository/pessoaRepository';
import { IEnderecoRepository } from '../../../../protocols/repository/enderecoRepository';
import { Endereco } from '../../../entity/objectValues/Endereco';
import { EditarEnderecoInput } from './EditarEnderecoInput';
import { ListarPessoaInput } from '../../pessoa/listarPessoa/ListarPessoaInput';

export class EditarEndereco {

  constructor(private pessoaRepository: IPessoaRepository, private enderecoRepository: IEnderecoRepository) {
  }

  public async execute(pUnitWork: UnitOfWork, pInputPessoa: ListarPessoaInput, pInputEndereco: EditarEnderecoInput): Promise<EditarEnderecoOutput | null> {

    const endereco = new Endereco({
      identificacao: pInputPessoa.identificacao,
      cep: pInputEndereco.cep,
      logradouro: pInputEndereco.logradouro,
      bairro: pInputEndereco.bairro,
      cidade: pInputEndereco.cidade,
      complemento: pInputEndereco.complemento,
      estado: pInputEndereco.estado,
      is_principal: pInputEndereco.isPrincipal,
      numero: pInputEndereco.numero,
    })

    const pessoaExist = await this.pessoaRepository.buscarPessoaPorIdentificacao(pInputPessoa.identificacao);
    const enderecoExist = await this.enderecoRepository.isEnderecoExist(endereco.cep, endereco.identificacao);

    if (pessoaExist) {
      if (enderecoExist) {
        await this.enderecoRepository.editar(pUnitWork, endereco, endereco.identificacao);
        return new EditarEnderecoOutput(endereco);
      }
      return null;
    }
    return null;
  }
}