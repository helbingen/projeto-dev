import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ExcluirEmailInput } from '../../../domain/implementations/useCases/email/excluirEmail/ExcluirEmailInput';
import { ExcluirEmail } from '../../../domain/implementations/useCases/email/excluirEmail/ExcluirTelefone';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ExcluirEmailController implements IController {
  constructor(private useCase: ExcluirEmail) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputEmail = new ExcluirEmailInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputEmail);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Email excluido com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Pessoa ou email não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

