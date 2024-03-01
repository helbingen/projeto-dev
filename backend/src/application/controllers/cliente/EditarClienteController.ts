import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarCliente } from '../../../domain/implementations/useCases/cliente/editarCliente/EditarCliente';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarClienteController implements IController {
  constructor(private useCase: EditarCliente) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    console.log(pData);
    try {
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork);
      await unitOfWork.commit();
      return new EntryPointSuccess('Cliente editado com sucesso.', result);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

