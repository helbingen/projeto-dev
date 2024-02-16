export class SenhasUtil {

  static verificarSenhaForte(senha: string): boolean {
    // Pelo menos uma letra minúscula ((?=.*[a-z]))
    // Pelo menos uma letra maiúscula ((?=.*[A-Z]))
    // Pelo menos um número ((?=.*\d))
    // Pelo menos um caractere especial ((?=.*[^A-Za-z0-9]))
    // Pelo menos 8 caracteres de comprimento (.{8,})
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(senha);
  }

}
