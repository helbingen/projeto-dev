import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ExcluirContato } from '../../../domain/implementations/useCases/tipoContato/excluirContato/ExcluirContato';
import { ExcluirContatoInput } from '../../../domain/implementations/useCases/tipoContato/excluirContato/ExcluirContatoInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ExcluirContatoController implements IController {
  constructor(private useCase: ExcluirContato) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputContato = new ExcluirContatoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputContato);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Contato excluido com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Contato não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

