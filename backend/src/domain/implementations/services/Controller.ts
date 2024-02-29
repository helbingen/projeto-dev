import EntrypointData from '../entity/EntryPointData';
import EntryPointSuccess from '../entity/EntryPointSucess';

export interface IController {
  execute(pData: EntrypointData): Promise<EntryPointSuccess>;
}