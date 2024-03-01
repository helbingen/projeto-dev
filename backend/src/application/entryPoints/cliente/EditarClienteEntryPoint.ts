import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IEntrypointGuard } from '../../../domain/implementations/entity/entryPoints/EntryPointGuard';
import { IController } from '../../../domain/implementations/services/Controller';

export class EditarClienteEntryPoint {

  public path: string = '/editar-cliente';

  public httpMetodo: HttpMetodos = HttpMetodos.put;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    this.controller = pController;
  }

}