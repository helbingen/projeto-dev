import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ExcluirCliente } from '../../../domain/implementations/useCases/cliente/excluirCliente/ExcluirCliente';
import { ExcluirClienteInput } from '../../../domain/implementations/useCases/cliente/excluirCliente/ExcluirClienteInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ExcluirClienteController implements IController {
  constructor(private useCase: ExcluirCliente) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);;
    try {
      const inputCliente = new ExcluirClienteInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });

      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputCliente);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Cliente excluido com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Cliente não encontrado', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

