import { Conta } from '../../implementations/entity/objectValues/Conta';

export interface ITokenService {
  validar(pToken: string): boolean;
  criarToken(pConta: Conta): string;
}
