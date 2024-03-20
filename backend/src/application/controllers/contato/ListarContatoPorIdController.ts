import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarContatoPorId } from '../../../domain/implementations/useCases/tipoContato/listarContatoPorId/ListarContatoPorId';
import { ListarContatoPorIdInput } from '../../../domain/implementations/useCases/tipoContato/listarContatoPorId/ListarContatoPorIdInput';

export class ListarContatoPorIdController implements IController {
  constructor(private useCase: ListarContatoPorId) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputContato = new ListarContatoPorIdInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputContato);
      return new EntryPointSuccess('Listagem de contato: ', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

