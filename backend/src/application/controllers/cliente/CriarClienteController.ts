import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { CriarCliente } from '../../../domain/implementations/useCases/cliente/criarCliente/CriarCliente';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class CriarClienteController implements IController {
  constructor(private useCase: CriarCliente) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork);
      await unitOfWork.commit();

      return new EntryPointSuccess('Cliente criado com sucesso.', result);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

