import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarEmail } from '../../../domain/implementations/useCases/email/listarEmail/ListarEmail';
import { ListarEmailInput } from '../../../domain/implementations/useCases/email/listarEmail/ListarEmailInput';

export class ListarEmailController implements IController {
  constructor(private useCase: ListarEmail) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputEmail = new ListarEmailInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputEmail);
      return new EntryPointSuccess('Listagem de email.', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

