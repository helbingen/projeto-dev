import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { CriarConta } from '../../../domain/implementations/useCases/conta/criarConta/CriarConta';
import { CriarContaInput } from '../../../domain/implementations/useCases/conta/criarConta/CriarContaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class CriarContaController implements IController {
  constructor(private useCase: CriarConta) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {
      const inputConta = new CriarContaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputConta);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Conta criada com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Email já cadastrado!', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

