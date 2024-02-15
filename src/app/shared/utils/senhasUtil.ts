export class SenhasUtil {

  static verificarSenhaForte(senha: string): boolean {
    if (senha) {
      return true;
    }
    return false;
  }

}
