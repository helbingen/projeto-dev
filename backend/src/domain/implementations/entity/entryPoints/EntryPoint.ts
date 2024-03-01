import { HttpMetodos } from '../../contants/enum/httpMetodoEnum';
import { IController } from '../../services/Controller';
import { IEntrypointGuard } from '../entryPoints/EntryPointGuard';

export default class EntryPoint {
  public path: string = '';

  public httpMetodo: HttpMetodos;

  // public guards: IEntrypointGuard[] = [];

  public controller: IController;

  constructor(pPath: string, pHttpMetodo: HttpMetodos, pController: IController) {
    this.path = pPath;
    this.httpMetodo = pHttpMetodo;
    // this.guards = pGuards;
    this.controller = pController;
  }
}
