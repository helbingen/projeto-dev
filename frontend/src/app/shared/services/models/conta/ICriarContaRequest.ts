import { ILoginRequest } from './ILoginRequest';

export interface ICriarContaRequest extends ILoginRequest {
  nome: string,
}
