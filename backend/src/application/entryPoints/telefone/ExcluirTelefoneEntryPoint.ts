import { HttpMetodos } from '../../../domain/implementations/contants/enum/httpMetodoEnum';
import { IController } from '../../../domain/implementations/services/Controller';

export class ExcluirTelefoneEntryPoint {

  public path: string = '/excluir-telefone';

  public httpMetodo: HttpMetodos = HttpMetodos.delete;

  // public guards: IEntrypointGuard[];

  public controller: IController;

  constructor(pController: IController) {
    // this.guards = pGuards;
    this.controller = pController;
  }

}