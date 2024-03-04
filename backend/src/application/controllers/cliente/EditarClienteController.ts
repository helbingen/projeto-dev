import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointFail from '../../../domain/implementations/entity/entryPoints/EntryPointFail';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarCliente } from '../../../domain/implementations/useCases/cliente/editarCliente/EditarCliente';
import { EditarClienteInput } from '../../../domain/implementations/useCases/cliente/editarCliente/EditarClienteInput';
import { EditarPessoaInput } from '../../../domain/implementations/useCases/pessoa/editarPessoa/EditarPessoaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarClienteController implements IController {
  constructor(private useCase: EditarCliente) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);;
    try {

      const inputPessoa = new EditarPessoaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization
      });
      const inputCliente = new EditarClienteInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });

      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputCliente, inputPessoa);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Cliente editado com sucesso.', result);
      }
      return new EntryPointFail('Cliente não encontrado.');
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

