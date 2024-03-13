import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContaService } from '../../../shared/services/http/conta.service';
import { ToasterService } from '../../../shared/components/toaster-controller/toaster.service';
import { Router } from '@angular/router';
import { ILoginRequest } from '../../../shared/services/models/conta/ILoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    senha: new FormControl<string | null>(null, Validators.required),
    lembrarMeCheckbox: new FormControl<boolean | null>(false),
  });

  constructor(private contaService: ContaService, private toasterService: ToasterService, private router: Router) { }

  private buildLoginObject(): ILoginRequest {
    return {
      email: this.loginForm.controls.email.value!,
      senha: this.loginForm.controls.senha.value!,
    }
  }

  public async login(): Promise<void> {
    try {
      if (this.loginForm.valid) {
        const dados = await this.contaService.login(this.buildLoginObject());
        if (dados.sucesso) {
          this.router.navigate(['inicio'])
        }
      }
    } catch (error) {
      this.toasterService.showAlert('E-mail ou senha inválido');
      throw error;
    }
  }
}

