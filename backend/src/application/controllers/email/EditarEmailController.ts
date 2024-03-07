import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarEmail } from '../../../domain/implementations/useCases/email/editarEmail/EditarEmail';
import { EditarEmailInput } from '../../../domain/implementations/useCases/email/editarEmail/EditarEmailInput';
import { ListarPessoaInput } from '../../../domain/implementations/useCases/pessoa/listarPessoa/ListarPessoaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarEmailController implements IController {
  constructor(private useCase: EditarEmail) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputPessoa = new ListarPessoaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization
      });
      const inputEmail = new EditarEmailInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputPessoa, inputEmail);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Email editado com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Pessoa ou email não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

