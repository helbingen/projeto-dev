import UnitOfWork from '../../../../protocols/models/entity/UnitOfWork';
import { IEnderecoRepository } from '../../../../protocols/repository/enderecoRepository';
import { Endereco } from '../../../entity/objectValues/Endereco';
import { ExcluirEnderecoInput } from './ExcluirEnderecoInput';

export class ExcluirEndereco {
  constructor(private enderecoRepository: IEnderecoRepository) { }

  public async execute(pUnitWork: UnitOfWork, pInputEndereco: ExcluirEnderecoInput): Promise<boolean> {
    const endereco = new Endereco({
      identificacao: pInputEndereco.identificacao,
      cep: pInputEndereco.cep,
    });
    const enderecoExist = await this.enderecoRepository.isEnderecoExist(endereco.cep, endereco.identificacao);
    if (enderecoExist) {
      await this.enderecoRepository.excluir(pUnitWork, endereco.identificacao, endereco.cep);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}