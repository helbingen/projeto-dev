import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class EditarContatoEntryPoint {

  public path: string = '/editar-contato';

  public httpMetodo: HttpMetodos = HttpMetodos.put;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}