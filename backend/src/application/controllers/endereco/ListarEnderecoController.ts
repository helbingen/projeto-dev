import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarEndereco } from '../../../domain/implementations/useCases/endereco/listarEndereco/ListarEndereco';
import { ListarEnderecoInput } from '../../../domain/implementations/useCases/endereco/listarEndereco/ListarEnderecoInput';

export class ListarEnderecoController implements IController {
  constructor(private useCase: ListarEndereco) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputEndereco = new ListarEnderecoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputEndereco);
      return new EntryPointSuccess('Listagem de endereço.', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

