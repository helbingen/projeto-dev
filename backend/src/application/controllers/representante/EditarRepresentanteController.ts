import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarRepresentante } from '../../../domain/implementations/useCases/representante/editarRepresentante/EditarRepresentante';
import { EditarRepresentanteInput } from '../../../domain/implementations/useCases/representante/editarRepresentante/EditarRepresentanteInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarRepresentanteController implements IController {
  constructor(private useCase: EditarRepresentante) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputRepresentante = new EditarRepresentanteInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputRepresentante);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Representante editado com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Representante ou cliente não existe', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

