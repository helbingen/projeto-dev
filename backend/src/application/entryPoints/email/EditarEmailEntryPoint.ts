import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class EditarEmailEntryPoint {

  public path: string = '/editar-email';

  public httpMetodo: HttpMetodos = HttpMetodos.put;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    this.controller = pController;
  }

}