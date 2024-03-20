import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarContato } from '../../../domain/implementations/useCases/tipoContato/editarContato/EditarContato';
import { EditarContatoInput } from '../../../domain/implementations/useCases/tipoContato/editarContato/EditarContatoInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarContatoController implements IController {
  constructor(private useCase: EditarContato) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputContato = new EditarContatoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputContato);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Contato editado com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Contato não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

