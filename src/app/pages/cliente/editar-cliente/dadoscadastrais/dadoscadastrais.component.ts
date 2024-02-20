import { Component } from '@angular/core';
import { TipoPessoaEnum } from '../../../../shared/models/TipoPessoa.enum';
import cpfCnpjUtil from '../../../../shared/utils/cpfCnpjUtil';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoMascarasEnum, TipoBotao } from '@decisaosistemas/angular-ds';
import { ErrorsUtil } from '../../../../shared/utils/errorsUtil';
import { SituacaoPessoaEnum } from '../../../../shared/models/SituacaoPessoa.enum';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';

@Component({
  selector: 'app-dadoscadastrais',
  templateUrl: './dadoscadastrais.component.html',
  styleUrl: './dadoscadastrais.component.scss'
})
export class DadoscadastraisComponent {

  public dadosCadastraisForm = new FormGroup({
    cnpjCpf: new FormControl<string | null>(null, Validators.required),
    nome: new FormControl<string | null>(null, Validators.required),
    nomeFantasia: new FormControl<string | null>(null, Validators.required),
    nomeDaMae: new FormControl<string | null>(null, Validators.required),
    inscricaoMunicial: new FormControl<string | null>(null),
    inscricaoEstadual: new FormControl<string | null>(null),
  })

  public cnpjCpfMascara = TipoMascarasEnum.cpfCnpj;
  public errosCustomizados = ErrorsUtil.getErrors;
  public tipoPessoa!: TipoPessoaEnum | null;
  public tipoPessoaEnum = TipoPessoaEnum;
  public situacaoPessoaEnum = SituacaoPessoaEnum;
  public labelBotaoSituacao: string = 'Ativo';
  public tipoBotaoSituacao: TipoBotao = 'PRIMARY';

  constructor(
    private readonly toasterService: ToasterService,
  ) { }

  public ngOnInit(): void {
    this.dadosCadastraisForm.controls.cnpjCpf.setValue('13.352.165/0001-74')
    // this.dadosCadastraisForm.controls.cnpjCpf.setValue('823.081.320-51')
    const cnpjCpfLimpo = cpfCnpjUtil.limpaCnpjCpf(this.dadosCadastraisForm.controls.cnpjCpf.value ?? '');
    this.tipoPessoa = cpfCnpjUtil.identificaTipoDePessoa(cnpjCpfLimpo);
  }

  private formularioValido(): boolean {
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

  public botaoSalvarAlteracoesDesabilitado(): boolean {
    if (this.formularioValido()) {
      return false;
    }
    return true;
  }

  public salvarAlteracoes(): void {
    this.toasterService.showSuccess('Cliente salvo com sucesso!');
  }

  public mudarSituacaoPessoa(pTipoSituacao: SituacaoPessoaEnum): void {
    if (pTipoSituacao === SituacaoPessoaEnum.inativo) {
      this.labelBotaoSituacao = SituacaoPessoaEnum.inativo;
      this.tipoBotaoSituacao = 'SECONDARY';
    }
    if (pTipoSituacao === SituacaoPessoaEnum.negativado) {
      this.labelBotaoSituacao = SituacaoPessoaEnum.negativado;
      this.tipoBotaoSituacao = 'DANGER';
    }
  }


}
