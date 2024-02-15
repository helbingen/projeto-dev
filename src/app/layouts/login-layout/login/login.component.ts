import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
}
