import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { ExcluirTelefone } from '../../../domain/implementations/useCases/telefone/excluirTelefone/ExcluirTelefone';
import { ExcluirTelefoneInput } from '../../../domain/implementations/useCases/telefone/excluirTelefone/ExcluirTelefoneInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class ExcluirTelefoneController implements IController {
  constructor(private useCase: ExcluirTelefone) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputTelefone = new ExcluirTelefoneInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputTelefone);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Telefone excluido com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Pessoa ou endereço não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

