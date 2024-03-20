import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ListarContato } from '../../../domain/implementations/useCases/tipoContato/listarContato/ListarContato';

export class ListarContatoController implements IController {
  constructor(private useCase: ListarContato) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    try {
      const result = await this.useCase.execute();
      return new EntryPointSuccess('Listagem de contato: ', result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

