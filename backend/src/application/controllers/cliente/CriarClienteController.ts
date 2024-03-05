import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { CriarCliente } from '../../../domain/implementations/useCases/cliente/criarCliente/CriarCliente';
import { CriarClienteInput } from '../../../domain/implementations/useCases/cliente/criarCliente/CriarClienteInput';
import { CriarPessoaInput } from '../../../domain/implementations/useCases/pessoa/criarPessoa/CriarPessoaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class CriarClienteController implements IController {
  constructor(private useCase: CriarCliente) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputPessoa = new CriarPessoaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization
      });
      const inputCliente = new CriarClienteInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputCliente);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Cliente criado com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Cliente já cadastrado', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

