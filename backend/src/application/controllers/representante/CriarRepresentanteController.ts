import EntrypointData from '../../../domain/implementations/entity/entryPoints/EntryPointData';
import EntryPointResponse from '../../../domain/implementations/entity/entryPoints/EntryPointResponse';
import EntryPointSuccess from '../../../domain/implementations/entity/entryPoints/EntryPointSucess';
import { IController } from '../../../domain/implementations/services/Controller';
import { CriarClienteInput } from '../../../domain/implementations/useCases/cliente/criarCliente/CriarClienteInput';
import { CriarPessoaInput } from '../../../domain/implementations/useCases/pessoa/criarPessoa/CriarPessoaInput';
import { CriarRepresentante } from '../../../domain/implementations/useCases/representante/criarRepresentante/CriarRepresentante';
import { CriarRepresentanteInput } from '../../../domain/implementations/useCases/representante/criarRepresentante/CriarRepresentanteInput';
import UnitOfWork from '../../../domain/protocols/models/entity/UnitOfWork';

export class CriarRepresentanteController implements IController {
  constructor(private useCase: CriarRepresentante) { }

  public async execute(pData: EntrypointData): Promise<EntryPointSuccess> {
    const unitOfWork = new UnitOfWork(pData.tokenAuthorization);
    try {

      const inputRepresentante = new CriarRepresentanteInput({
        body: pData.body,
        parametros: pData.parametros,
        tokenAuthorization: pData.tokenAuthorization,
      });

      const inputCliente = new CriarClienteInput(pData);
      await unitOfWork.init();
      const result = await this.useCase.execute(unitOfWork, inputRepresentante, inputCliente);
      await unitOfWork.commit();
      if (result) {
        return new EntryPointSuccess('Representante criado com sucesso.', result);
      }
      return new EntryPointResponse(false, 400, 'Representante já cadastrado ou cliente inexistente', result, null);
    } catch (error) {
      await unitOfWork.rollBack();
      return Promise.reject(error);
    }
  }
}

