import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class ListarClientePorIdentificacaoEntryPoint {

  public path: string = '/listar-cliente/:identificacao';

  public httpMetodo: HttpMetodos = HttpMetodos.get;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}