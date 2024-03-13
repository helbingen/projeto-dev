class IdentificacaoUtil {
  public limparCampoIdentificacao(pIdentificacao: string): string {
    const regex = /[^0-9]/g;
    return pIdentificacao.replace(regex, '');
  }
}

export default new IdentificacaoUtil()