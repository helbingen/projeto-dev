import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SenhasUtil } from '../../../shared/utils/senhasUtil';
import { ErrorsUtil } from '../../../shared/utils/errorsUtil';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.scss'
})
export class CriarContaComponent {

  public criarContaForm = new FormGroup({
    nome: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    senha: new FormControl<string | null>(null, Validators.required),
    senha2: new FormControl<string | null>(null, Validators.required),
  });

  public formularioInvalido = false;

  public errosCustomizados = ErrorsUtil.getErrors;

  public verificarSenha(pSenha: string, pFormControl: FormControl): void {
    if (pSenha !== '') {
      if (!SenhasUtil.verificarSenhaForte(pSenha)) {
        pFormControl.setErrors({
          senhaForaDoPadrao: true,
        })
      }
    }
  }

  public verificarSeSenhasSaoIguais(): void {
    if (this.criarContaForm.controls.senha.value !== this.criarContaForm.controls.senha2.value) {
      this.formularioInvalido = true;
    } else {
      this.formularioInvalido = false;
    }
  }

  public verificarSeFormularioEInvalido(): boolean {
    if (this.criarContaForm.invalid || this.formularioInvalido) {
      return true;
    }
    return false;
  }

}
