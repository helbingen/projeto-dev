import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class ListarContatoPorIdEntryPoint {

  public path: string = '/listar-contato/:descricao';

  public httpMetodo: HttpMetodos = HttpMetodos.get;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}