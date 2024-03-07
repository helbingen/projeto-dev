import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarTelefoneInput } from '../../../domain/implementations/useCases/telefone/editarTelefone/EditarTelefoneInput';
import { ListarPessoaInput } from '../../../domain/implementations/useCases/pessoa/listarPessoa/ListarPessoaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';
import { EditarTelefone } from '../../../domain/implementations/useCases/telefone/editarTelefone/EditarTelefone';

export class EditarTelefoneController implements IController {
  constructor(private useCase: EditarTelefone) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputPessoa = new ListarPessoaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization
      });
      const inputTelefone = new EditarTelefoneInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputPessoa, inputTelefone);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Telefone editado com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Pessoa ou telefone não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

