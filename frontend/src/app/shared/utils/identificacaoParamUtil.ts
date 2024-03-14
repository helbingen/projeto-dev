class IdentificacaoParamUtil {

  public obterIdentificacaoPelaRota(pRota: string): string {
    const regex = /\d+/g;
    const identificacao = pRota.match(regex);
    if (identificacao) {
      return identificacao.join('');
    } else {
      console.error('Falha ao obter identificação do cliente/pessoa');
      return '';
    }
  }
}

export default new IdentificacaoParamUtil();
