import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class ExcluirContatoEntryPoint {

  public path: string = '/excluir-contato';

  public httpMetodo: HttpMetodos = HttpMetodos.delete;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}