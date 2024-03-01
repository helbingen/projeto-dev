import ErrorHandler from '../errors/ErrorHandler';
import EntryPointResponse from './EntryPointResponse';
import EntryPointResponseError from './EntryPointResponseError';

export default class EntryPointSuccess<T = any> extends EntryPointResponse<T> {
  constructor(pMensagem: string, pDados: T | null, pError?: ErrorHandler | null) {
    super(true, 200, pMensagem, pDados, pError ? new EntryPointResponseError(pError) : null);
  }
}
