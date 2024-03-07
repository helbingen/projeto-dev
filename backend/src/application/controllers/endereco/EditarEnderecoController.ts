import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { EditarEndereco } from '../../../domain/implementations/useCases/endereco/editarEndereco/EditarEndereco';
import { EditarEnderecoInput } from '../../../domain/implementations/useCases/endereco/editarEndereco/EditarEnderecoInput';
import { ListarPessoaInput } from '../../../domain/implementations/useCases/pessoa/listarPessoa/ListarPessoaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class EditarEnderecoController implements IController {
  constructor(private useCase: EditarEndereco) {
  }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputPessoa = new ListarPessoaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization
      });
      const inputEndereco = new EditarEnderecoInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputPessoa, inputEndereco);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Endereco editado com sucesso.', result);
      }
      return new EntryPointResponse(false, 404, 'Pessoa ou endereço não encontrado.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

