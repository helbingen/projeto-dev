import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class ListarTelefonePorIdEntryPoint {

  public path: string = '/listar-telefone';

  public httpMetodo: HttpMetodos = HttpMetodos.post;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}