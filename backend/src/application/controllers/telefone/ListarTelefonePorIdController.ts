import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarTelefone } from '../../../domain/implementations/useCases/telefone/listarTelefone/ListarTelefone';
import { ListarTelefonePorIdInput } from '../../../domain/implementations/useCases/telefone/listarTelefonePorId/ListarTelefoneInput';
import { ListarTelefonePorId } from '../../../domain/implementations/useCases/telefone/listarTelefonePorId/ListarTelefonePorId';

export class ListarTelefonePorIdController implements IController {
  constructor(private useCase: ListarTelefonePorId) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputTelefone = new ListarTelefonePorIdInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputTelefone);
      return new EntryPointSuccess('Listagem de telefone.', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

