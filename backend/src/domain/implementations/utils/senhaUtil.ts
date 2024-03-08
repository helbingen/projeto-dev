import crypto from 'crypto';

class SenhaUtil {
  public criptografarSenha(pSenha: string): string {
    // const secret = 'Hi';
    var hash = crypto.createHash('sha256').update(pSenha).digest('hex');
    return hash;
  }
}

export default new SenhaUtil();
