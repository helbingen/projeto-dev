import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarClientePorIdentificacao } from '../../../domain/implementations/useCases/cliente/listarClientePorIdentitificacao/ListarClientePorIdentificacao';
import { ListarClientePorIdentificacaoInput } from '../../../domain/implementations/useCases/cliente/listarClientePorIdentitificacao/ListarClientePorIdentificacaoInput';

export class ListarClientePorIdentificacaoController implements IController {
  constructor(private useCase: ListarClientePorIdentificacao) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputCliente = new ListarClientePorIdentificacaoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });


      const result = await this.useCase.execute(inputCliente);
      return new EntryPointSuccess('Lista de clientes.', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

