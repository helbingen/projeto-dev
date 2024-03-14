import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoMascarasEnum, ToasterTipoEnum } from '@decisaosistemas/angular-ds';
import { ErrorsUtil } from '../../../shared/utils/errorsUtil';
import cpfCnpjUtil from '../../../shared/utils/cpfCnpjUtil';
import { TipoPessoaEnum } from '../../../shared/models/TipoPessoa.enum';
import { ToasterService } from '../../../shared/components/toaster-controller/toaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../shared/services/http/cliente.service';
import { ICriarClienteRequest } from '../../../shared/services/models/cliente/ICriarClienteRequest';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrl: './adicionar-cliente.component.scss'
})
export class AdicionarClienteComponent {

  constructor(
    private readonly toasterService: ToasterService,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
    private clienteService: ClienteService,
  ) {

  }

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

  private buildCriarClienteRequestObject(): ICriarClienteRequest {
    return {
      identificacao: this.dadosCadastraisForm.controls.cnpjCpf.value!,
      nome: this.dadosCadastraisForm.controls.nome.value!,
      nomeFantasia: this.dadosCadastraisForm.controls.nomeFantasia.value,
      nomeMae: this.dadosCadastraisForm.controls.nomeDaMae.value,
    }
  }

  public async salvarCliente(): Promise<void> {
    try {
      const cpfCnpjLimpo = cpfCnpjUtil.limpaCnpjCpf(this.dadosCadastraisForm.controls.cnpjCpf.value!)
      await this.clienteService.criarCliente(this.buildCriarClienteRequestObject());
      this.toasterService.showSuccess('Cliente salvo com sucesso!');
      // this.router.navigate(['../editar-cliente'], { relativeTo: this.activeRoute });
      this.router.navigate([`../editar-cliente/${cpfCnpjLimpo}`], { relativeTo: this.activeRoute });
    } catch (error) {
      this.toasterService.showAlert('Cliente já cadastrado!');
      throw error;
    }
  }

}
