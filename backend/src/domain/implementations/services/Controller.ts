import EntrypointData from '../entity/entryPoints/EntryPointData';
import EntryPointSuccess from '../entity/entryPoints/EntryPointSucess';

export interface IController {
  execute(pData: EntrypointData): Promise<EntryPointSuccess>;
}