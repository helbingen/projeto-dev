import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarRepresentante } from '../../../domain/implementations/useCases/representante/listarRepresentante/ListarRepresentante';
import { ListarRepresentanteInput } from '../../../domain/implementations/useCases/representante/listarRepresentante/ListarRepresentanteInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ListarRepresentanteController implements IController {
  constructor(private useCase: ListarRepresentante) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputRepresentante = new ListarRepresentanteInput({
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

