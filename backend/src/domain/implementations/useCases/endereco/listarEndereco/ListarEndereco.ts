import { ListarEnderecoOutput } from './ListarEnderecoOutput';
import { IEnderecoRepository } from '../../../../protocols/repository/enderecoRepository';
import { ListarEnderecoInput } from './ListarEnderecoInput';

export class ListarEndereco {

  constructor(private enderecoRepository: IEnderecoRepository) {
  }

  public async execute(pInputEndereco: ListarEnderecoInput): Promise<ListarEnderecoOutput[]> {
    const enderecoDb = await this.enderecoRepository.listarTodos(pInputEndereco.identificacao);
    let listaEndereco: ListarEnderecoOutput[] = [];
    for (let endereco of enderecoDb) {
      listaEndereco.push(endereco);
    }
    return listaEndereco;

  }
}