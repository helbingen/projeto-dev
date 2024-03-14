export class DataUtil {
  static isDataValida(dateString: string): boolean {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Formato esperado: "DD/MM/YYYY"

    if (!dateRegex.test(dateString)) {
      return false; // Não corresponde ao formato esperado
    }

    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Verifica se os valores da data são válidos
    const isValidYear = year >= 1970 && year <= 9999;
    const isValidMonth = month >= 1 && month <= 12;
    const isValidDay = day >= 1 && day <= 31;

    // Verifica se o ano e o mês têm a quantidade correta de dias
    const isValidDayOfMonth = day <= new Date(year, month, 0).getDate();

    return isValidYear && isValidMonth && isValidDay && isValidDayOfMonth;
  }

  static dataStringParaDataDate(pData: string | null): Date {
    if (pData === '' || pData === null) {
      return new Date();
    }
    const dia = pData.substring(0, 2);
    const mes = pData.substring(3, 5);
    const ano = pData.substring(6, 10);
    return new Date(`${mes}/${dia}/${ano}`);
  }
}
