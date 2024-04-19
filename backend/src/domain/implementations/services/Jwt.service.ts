import * as jwt from 'jsonwebtoken';
import { ITokenService } from '../../protocols/services/token.service';
import { environments } from '../../../environment';
import { Conta } from '../entity/objectValues/Conta';

export default class JwtServices implements ITokenService {
  public validar(pToken: string): boolean {
    try {
      jwt.verify(pToken, environments.JWT_SECRET, {
        algorithms: [environments.JWT_ALGORITHM as jwt.Algorithm],
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  public criarToken(pConta: Conta): string {
    return jwt.sign(
      {
        idConta: pConta.idConta,
      },
      environments.JWT_SECRET,
      {
        algorithm: environments.JWT_ALGORITHM as jwt.Algorithm,
        expiresIn: '1d',
      },
    );
  }
}
