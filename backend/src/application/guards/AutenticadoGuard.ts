import EntrypointData from '../../domain/implementations/entity/entryPoints/EntryPointData';
import { IEntrypointGuard } from '../../domain/implementations/entity/entryPoints/EntryPointGuard';
import ErroInternoServidor from '../../domain/implementations/entity/errors/ErroInternoServidor';
import ErrorHandler from '../../domain/implementations/entity/errors/ErrorHandler';
import NaoAutenticado from '../../domain/implementations/entity/errors/NaoAutenticado';
import { ITokenService } from '../../domain/protocols/services/token.service';

export default class AutenticadoGuard implements IEntrypointGuard {
  constructor(private tokenService: ITokenService) { }

  public async execute(pData: EntrypointData): Promise<{ sucesso: boolean; erro: ErrorHandler | null }> {
    try {
      const isValid = this.tokenService.validar(pData.tokenAuthorization);
      if (isValid === false) {
        return { sucesso: false, erro: new NaoAutenticado('Usuário não logado no sistema ou login está inválido.') };
      }
      return { sucesso: true, erro: null };
    } catch (error) {
      return { sucesso: false, erro: new ErroInternoServidor(error) };
    }
  }
}
