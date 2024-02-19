import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import { ErrorsUtil } from '../../../shared/utils/errorsUtil';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrl: './adicionar-cliente.component.scss'
})
export class AdicionarClienteComponent {

  public dadosCadastraisForm = new FormGroup({
    cnpjCpf: new FormControl<string | null>(null, Validators.required),
    nome: new FormControl<string | null>(null, Validators.required),
    nomeFantasia: new FormControl<string | null>(null, Validators.required),
    nomeDaMae: new FormControl<string | null>(null, Validators.required),
  })

  public cnpjCpfMascara = TipoMascarasEnum.cpfCnpj;
  public errosCustomizados = ErrorsUtil.getErrors;

  public validarCpfCnpj(texto: string): void {
    // Verificar se o cpfCnpj é valido
    // this.dadosCadastraisForm.controls.cnpjCpf.setErrors({
    //   cnpjCpfInvalido: true
    // })

    // Se for válido, verificar se é CPF ou CNPJ
  }

}
