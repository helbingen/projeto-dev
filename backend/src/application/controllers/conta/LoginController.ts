import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { Login } from '../../../domain/implementations/useCases/conta/login/Login';
import { LoginInput } from '../../../domain/implementations/useCases/conta/login/LoginInput';

export class LoginController implements IController {
  constructor(private useCase: Login) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {
      const inputConta = new LoginInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      const result = await this.useCase.execute(inputConta);
      if (result) {
        return new EntryPointSuccess('Login realizado com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Email ou senha inválido!', result, null);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

