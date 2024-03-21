import { ICriarContatoRequest } from './ICriarContatoRequest';

export interface IEditarContatoRequest extends ICriarContatoRequest {
  idContato: string,
}
