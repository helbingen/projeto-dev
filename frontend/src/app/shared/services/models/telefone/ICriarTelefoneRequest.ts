import { IListarTelefonePorIdRequest } from './IListarTelefonePorIdRequest';

export interface ICriarTelefoneRequest extends IListarTelefonePorIdRequest {
  isPrincipal: boolean,
}
