import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
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

}
