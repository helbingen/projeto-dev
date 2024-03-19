import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarEmailPorId } from '../../../domain/implementations/useCases/email/listarEmailPorId/ListarEmailPorId';
import { ListarEmailPorIdInput } from '../../../domain/implementations/useCases/email/listarEmailPorId/ListarEmailPorIdInput';


export class ListarEmailPorIdController implements IController {
  constructor(private useCase: ListarEmailPorId) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {

      const inputEmail = new ListarEmailPorIdInput({
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

