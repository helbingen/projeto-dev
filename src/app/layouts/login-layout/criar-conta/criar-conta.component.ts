import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  public verificarSenha(pSenha: string, pFormControl: FormControl): void {
    if (pSenha.length < 8) {
      pFormControl.setErrors({
        senhaForaDoPadrao: true,
      })
    }
  }

}
