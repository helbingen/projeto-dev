import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { CriarEmail } from '../../../domain/implementations/useCases/email/criarEmail/CriarEmail';
import { CriarEmailInput } from '../../../domain/implementations/useCases/email/criarEmail/CriarEmailInput';
import { ListarPessoaInput } from '../../../domain/implementations/useCases/pessoa/listarPessoa/ListarPessoaInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class CriarEmailController implements IController {
  constructor(private useCase: CriarEmail) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputPessoa = new ListarPessoaInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization
      });
      const inputEmail = new CriarEmailInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputPessoa, inputEmail);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Email criado com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Pessoa não encontrada, ou email já cadastrado para a pessoa.', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

