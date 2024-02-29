import ErrorHandler from '../entity/errors/ErrorHandler';
import EntrypointData from './EntryPointData';

export interface IEntrypointGuard {
  execute(pData: EntrypointData, pRequestIp: string): Promise<{ sucesso: boolean; erro: ErrorHandler | null }>;
}
