import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IEntrypointGuard } from '../../../domain/implementations/entity/entryPoints/EntryPointGuard';
import { IController } from '../../../domain/implementations/services/Controller';

export class CriarContaEntryPoint {

  public path: string = '/criar-conta';

  public httpMetodo: HttpMetodos = HttpMetodos.post;

  public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController, pGuards: IEntrypointGuard[]) {
    this.guards = pGuards;
    this.controller = pController;
  }

}