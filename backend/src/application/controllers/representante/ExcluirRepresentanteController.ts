import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ExcluirRepresentante } from '../../../domain/implementations/useCases/representante/excluirRepresentante/ExcluirRepresentante';
import { ExcluirRepresentanteInput } from '../../../domain/implementations/useCases/representante/excluirRepresentante/ExcluirRepresentanteInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ExcluirRepresentanteController implements IController {
  constructor(private useCase: ExcluirRepresentante) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputRepresentante = new ExcluirRepresentanteInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputRepresentante);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Representante excluido com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Representante ou cliente não existe', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

