import { ErrorCodeEnum } from '../../contants/enum/errorCodeEnum';
import ErrorHandler from './ErrorHandler';

export default class NaoAutenticado extends ErrorHandler {
    constructor(pMensagem: string) {
        super(pMensagem, ErrorCodeEnum.naoAutenticado, 401);
    }
}
