import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarConta } from '../../../domain/implementations/useCases/conta/listarConta/ListarConta';
import { ListarContaInput } from '../../../domain/implementations/useCases/conta/listarConta/ListarContaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ListarContaController implements IController {
  constructor(private useCase: ListarConta) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {
      const inputConta = new ListarContaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputConta);
      if (result) {
        return new EntryPointSuccess('Conta: ', result);
      }
      return new EntryPointResponse(false, 400, 'Conta não encontrada!', result, null);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

