import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ExcluirEndereco } from '../../../domain/implementations/useCases/endereco/excluirEndereco/ExcluirEndereco';
import { ExcluirEnderecoInput } from '../../../domain/implementations/useCases/endereco/excluirEndereco/ExcluirEnderecoInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ExcluirEnderecoController implements IController {
  constructor(private useCase: ExcluirEndereco) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputEndereco = new ExcluirEnderecoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputEndereco);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Endereco excluido com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Pessoa ou endereço não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

