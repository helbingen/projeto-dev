import { Component } from '@angular/core';
import { TipoPessoaEnum } from '../../../../shared/models/TipoPessoa.enum';
import cpfCnpjUtil, { CpfCnpjUtil } from '../../../../shared/utils/cpfCnpjUtil';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoMascarasEnum, TipoBotao } from '@decisaosistemas/angular-ds';
import { ErrorsUtil } from '../../../../shared/utils/errorsUtil';
import { SituacaoPessoaEnum } from '../../../../shared/models/SituacaoPessoa.enum';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';
import { ValidatorsUtil } from '../../../../shared/utils/validatorsUtil';
import { ClienteService } from '../../../../shared/services/http/cliente.service';
import { Router } from '@angular/router';
import identificacaoParamUtil from '../../../../shared/utils/identificacaoParamUtil';
import { IEditarClienteRequest } from '../../../../shared/services/models/cliente/IEditarClienteRequest';
import { DataUtil } from '../../../../shared/utils/dataUtil';

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
    inscricaoMunicipal: new FormControl<string | null>(null),
    inscricaoEstadual: new FormControl<string | null>(null),
    dataCadastro: new FormControl<string | null>(null, ValidatorsUtil.dataValida)
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
    private clienteService: ClienteService,
    private router: Router,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.montarFormularioDadosCadastrais();
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

  public async salvarAlteracoes(): Promise<void> {
    try {
      await this.clienteService.editarCliente(this.buildObjetoEditarCliente());
      this.toasterService.showSuccess('Cliente editado com sucesso!');
    } catch (error) {
      this.toasterService.showAlert('Falha ao editar cliente!');
      console.error(error);
    }
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

  public async montarFormularioDadosCadastrais(): Promise<void> {
    const identificacao = identificacaoParamUtil.obterIdentificacaoPelaRota(this.router.url);
    const dados = await this.clienteService.listarClientePorIdentificacao(identificacao);
    if (dados) {
      this.dadosCadastraisForm.patchValue({
        cnpjCpf: cpfCnpjUtil.cnpjCpfFormatado(dados.dados.cliente.identificacao),
        dataCadastro: dados.dados.cliente.data_cadastro,
        inscricaoEstadual: dados.dados.pessoa.inscrição_estadual,
        inscricaoMunicipal: dados.dados.pessoa.inscrição_municipal,
        nome: dados.dados.pessoa.nome,
        nomeDaMae: dados.dados.pessoa.nome_mae,
        nomeFantasia: dados.dados.pessoa.nome_fantasia,
      });
      this.mudarSituacaoPessoa(dados.dados.cliente.situacao);
    }
  }

  private buildObjetoEditarCliente(): IEditarClienteRequest {
    return {
      identificacao: this.dadosCadastraisForm.controls.cnpjCpf.value!,
      nome: this.dadosCadastraisForm.controls.nome.value!,
      situacao: this.labelBotaoSituacao,
      dataCadastro: DataUtil.dataStringParaDataDate(this.dadosCadastraisForm.controls.dataCadastro.value),
      nomeFantasia: this.dadosCadastraisForm.controls.nomeFantasia.value!,
      nomeMae: this.dadosCadastraisForm.controls.nomeDaMae.value!,
      inscricaoMunicipal: this.dadosCadastraisForm.controls.inscricaoMunicipal.value!,
      inscricaoEstadual: this.dadosCadastraisForm.controls.inscricaoEstadual.value!,
    }
  }

}
