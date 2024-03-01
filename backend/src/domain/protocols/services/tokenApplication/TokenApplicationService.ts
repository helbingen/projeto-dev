import { jwtDecode } from "jwt-decode";

export class TokenApplicationService {

  public email: string = '';

  static buildByTokenEncoded(pEncodedToken: string) {
    const obj = jwtDecode(pEncodedToken) as any;
    const token = new TokenApplicationService();
    token.email = obj.email ?? token.email;
    return token;
  }

  constructor() { }

}
export default new TokenApplicationService();