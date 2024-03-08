import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarConta } from '../../../domain/implementations/useCases/conta/editarConta/EditarConta';
import { EditarContaInput } from '../../../domain/implementations/useCases/conta/editarConta/EditarContaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarContaController implements IController {
  constructor(private useCase: EditarConta) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {
      const inputConta = new EditarContaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputConta);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Conta editada com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Email não encontrado!', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

