import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarCliente } from '../../../domain/implementations/useCases/cliente/listarCliente/ListarCliente';
import { ListarClienteInput } from '../../../domain/implementations/useCases/cliente/listarCliente/ListarClienteInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ListarClienteController implements IController {
  constructor(private useCase: ListarCliente) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);;
    try {
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork);
      await unitOfWork.commit();
      return new EntryPointSuccess('Lista de clientes.', result);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

