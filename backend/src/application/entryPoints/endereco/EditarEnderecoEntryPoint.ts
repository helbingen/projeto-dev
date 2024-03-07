import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class EditarEnderecoEntryPoint {

  public path: string = '/editar-endereco';

  public httpMetodo: HttpMetodos = HttpMetodos.put;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    this.controller = pController;
  }

}