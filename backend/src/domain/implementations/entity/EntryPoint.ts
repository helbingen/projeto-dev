import { HttpMetodos } from '../contants/enum/httpMetodoEnum';
import { IController } from '../services/Controller';
import { IEntrypointGuard } from './EntryPointGuard';

export default class EntryPoint {
  public path: string = '';

  public httpMetodo: HttpMetodos;

  public guards: IEntrypointGuard[] = [];

  public controller: IController;

  constructor(pPath: string, pHttpMetodo: HttpMetodos, pGuards: IEntrypointGuard[], pController: IController) {
    this.path = pPath;
    this.httpMetodo = pHttpMetodo;
    this.guards = pGuards;
    this.controller = pController;
  }
}
