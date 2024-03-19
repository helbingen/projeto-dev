import { IListarEmailPorIdRequest } from './IListarEmailPorIdRequest';

export interface ICriarEmailRequest extends IListarEmailPorIdRequest {
  isPrincipal: boolean,
}
