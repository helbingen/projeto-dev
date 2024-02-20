import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import { ErrorsUtil } from '../../../shared/utils/errorsUtil';
import cpfCnpjUtil from '../../../shared/utils/cpfCnpjUtil';
import { TipoPessoaEnum } from '../../../shared/models/TipoPessoa.enum';

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
  public tipoPessoa!: TipoPessoaEnum | null;
  public tipoPessoaEnum = TipoPessoaEnum;

  public validarCpfCnpj(pCpfCnpj: string): void {
    if (!cpfCnpjUtil.validaCnpjCpf(pCpfCnpj)) {
      this.dadosCadastraisForm.controls.cnpjCpf.setErrors({
        cnpjCpfInvalido: true
      });
      return;
    }
    const cnpjCpfLimpo = cpfCnpjUtil.limpaCnpjCpf(pCpfCnpj);
    this.tipoPessoa = cpfCnpjUtil.identificaTipoDePessoa(cnpjCpfLimpo);
  }

  private formularioValido(pTipoPessoa: TipoPessoaEnum | null): boolean {
    if (this.tipoPessoa === TipoPessoaEnum.cpf) {
      if (
        this.dadosCadastraisForm.controls.cnpjCpf.valid
        && this.dadosCadastraisForm.controls.nome.valid
        && this.dadosCadastraisForm.controls.nomeDaMae.valid
      ) {
        return true;
      }
    }
    if (this.tipoPessoa === TipoPessoaEnum.cnpj) {
      if (
        this.dadosCadastraisForm.controls.cnpjCpf.valid
        && this.dadosCadastraisForm.controls.nome.valid
        && this.dadosCadastraisForm.controls.nomeFantasia.valid
      ) {
        return true;
      }
    }
    return false;
  }

  public botaoSalvarClienteDesabilitado(): boolean {
    if (this.formularioValido(this.tipoPessoa)) {
      return false;
    }
    return true;
  }

}
