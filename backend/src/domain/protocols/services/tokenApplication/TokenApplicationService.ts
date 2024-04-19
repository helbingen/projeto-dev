import { jwtDecode } from "jwt-decode";

export class TokenApplicationService {

  public idConta: string = '';

  static buildByTokenEncoded(pEncodedToken: string) {
    const obj = jwtDecode(pEncodedToken) as { idConta: string };
    const token = new TokenApplicationService();
    token.idConta = obj.idConta ?? token.idConta;
    return token;
  }

  constructor() { }

}
export default new TokenApplicationService();