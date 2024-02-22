import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { DataUtil } from './dataUtil';

export class ValidatorsUtil {

  static dataValida(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (!DataUtil.isDataValida(control.value)) {
        return { dataInvalida: true };
      }
    }
    return null;
  }

  static telefoneValido(pControl: FormControl<string | null>): ValidationErrors | null {
    if (pControl.value === null) {
      return null;
    }

    const telefoneLimpo = pControl.value.replace(/\D/g, '');
    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
      return { telefoneInvalido: true };
    }
    return null;
  }

}
