import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarRepresentante } from '../../../domain/implementations/useCases/representante/listarRepresentante/ListarRepresentante';
import { ListarRepresentantePorId } from '../../../domain/implementations/useCases/representante/listarRepresentantePorId/ListarRepresentantePorId';
import { ListarRepresentantePorIdInput } from '../../../domain/implementations/useCases/representante/listarRepresentantePorId/ListarRepresentantePorIdInput';

export class ListarRepresentantePorIdController implements IController {
  constructor(private useCase: ListarRepresentantePorId) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputRepresentante = new ListarRepresentantePorIdInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputRepresentante);
      return new EntryPointSuccess('Listagem de representantes: ', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

