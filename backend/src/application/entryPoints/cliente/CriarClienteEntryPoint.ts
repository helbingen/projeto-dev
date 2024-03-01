import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IEntrypointGuard } from '../../../domain/implementations/entity/entryPoints/EntryPointGuard';
import { IController } from '../../../domain/implementations/services/Controller';

export class CriarClienteEntryPoint {

  public path: string = '/criar-cliente';

  public httpMetodo: HttpMetodos = HttpMetodos.post;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}