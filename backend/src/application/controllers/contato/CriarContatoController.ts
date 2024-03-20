import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { CriarContato } from '../../../domain/implementations/useCases/tipoContato/criarContato/CriarContato';
import { CriarContatoInput } from '../../../domain/implementations/useCases/tipoContato/criarContato/CriarContatoInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class CriarContatoController implements IController {
  constructor(private useCase: CriarContato) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputContato = new CriarContatoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputContato);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Contato criado com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Contato já cadastrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

