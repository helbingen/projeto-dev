import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsUtil } from '../../../../../shared/utils/errorsUtil';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import cpfCnpjUtil from '../../../../../shared/utils/cpfCnpjUtil';
import { Router } from '@angular/router';
import { ToasterService } from '../../../../../shared/components/toaster-controller/toaster.service';

@Component({
  selector: 'app-dados-cadastrais-representante',
  templateUrl: './dados-cadastrais-representante.component.html',
  styleUrl: './dados-cadastrais-representante.component.scss'
})
export class DadosCadastraisRepresentanteComponent {

  constructor(private router: Router, private toasterService: ToasterService) { }

  public representanteForm = new FormGroup({
    cpfCnpj: new FormControl<string | null>(null, Validators.required),
    nome: new FormControl<string | null>(null, Validators.required),
  })

  public cnpjCpfMascara = TipoMascarasEnum.cpfCnpj;
  public errosCustomizados = ErrorsUtil.getErrors;

  public validarCpfCnpj(pCpfCnpj: string): void {
    if (!cpfCnpjUtil.validaCnpjCpf(pCpfCnpj)) {
      this.representanteForm.controls.cpfCnpj.setErrors({
        cnpjCpfInvalido: true
      });
      return;
    }
  }

  public adicionarRepresentante(): void {
    this.toasterService.showSuccess('Representante salvo com sucesso!');
    this.router.navigate(['./cliente/editar-cliente/representantes']);
  }

}
