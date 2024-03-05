import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IEntrypointGuard } from '../../../domain/implementations/entity/entryPoints/EntryPointGuard';
import { IController } from '../../../domain/implementations/services/Controller';

export class ExcluirClienteEntryPoint {

  public path: string = '/excluir-cliente';

  public httpMetodo: HttpMetodos = HttpMetodos.delete;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}