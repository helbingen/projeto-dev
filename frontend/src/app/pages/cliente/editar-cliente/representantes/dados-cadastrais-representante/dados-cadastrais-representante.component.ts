import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsUtil } from '../../../../../shared/utils/errorsUtil';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import cpfCnpjUtil from '../../../../../shared/utils/cpfCnpjUtil';
import { Router } from '@angular/router';
import { ToasterService } from '../../../../../shared/components/toaster-controller/toaster.service';
import { RepresentanteService } from '../../../../../shared/services/http/representante.service';
import { ICriarRepresentanteRequest } from '../../../../../shared/services/models/representante/ICriarRepresentanteRequest';

@Component({
  selector: 'app-dados-cadastrais-representante',
  templateUrl: './dados-cadastrais-representante.component.html',
  styleUrl: './dados-cadastrais-representante.component.scss'
})
export class DadosCadastraisRepresentanteComponent {

  public representanteForm = new FormGroup({
    cpfCnpj: new FormControl<string | null>(null, Validators.required),
    nome: new FormControl<string | null>(null, Validators.required),
  })

  public cnpjCpfMascara = TipoMascarasEnum.cpfCnpj;
  public errosCustomizados = ErrorsUtil.getErrors;
  public labelBotao = '';
  public isEdicao = false;
  public idCliente = '';
  public idRepresentante = '';


  constructor(
    private router: Router,
    private toasterService: ToasterService,
    private representanteService: RepresentanteService,
  ) {
    this.idCliente = this.router.getCurrentNavigation()!.extractedUrl.root.children['primary'].segments[2].path;
    this.idRepresentante = this.router.getCurrentNavigation()!.extractedUrl.root.children['primary'].segments[4].path;
    if (this.router.url === `/cliente/editar-cliente/${this.idCliente}/representantes/adicionar`) {
      this.labelBotao = 'Salvar representante';
      this.isEdicao = false;
    }
    else {
      this.labelBotao = 'Salvar alterações';
      this.isEdicao = true;
    }
  }


  public async ngOnInit(): Promise<void> {
    console.log(this.idCliente);
    const dados = await this.representanteService.listarRepresentantePorIdentificacao(
      this.idCliente,
      this.idRepresentante,
    );
    this.representanteForm.patchValue({
      cpfCnpj: cpfCnpjUtil.cnpjCpfFormatado(dados.dados.identificacao),
      nome: dados.dados.nome,
    });
    this.representanteForm.controls.cpfCnpj.disable();
  }

  public validarCpfCnpj(pCpfCnpj: string): void {
    if (!cpfCnpjUtil.validaCnpjCpf(pCpfCnpj)) {
      this.representanteForm.controls.cpfCnpj.setErrors({
        cnpjCpfInvalido: true
      });
      return;
    }
  }

  public async listarRepresentantePorId(): Promise<void> {

  }

  public async adicionarRepresentante(): Promise<void> {
    //se adição
    if (this.isEdicao) {
      try {
        await this.representanteService.editarRepresentante(this.buildRepresentanteObject());
        this.toasterService.showSuccess('Representante editado com sucesso!');
        this.router.navigate([`./cliente/editar-cliente/${this.idCliente}/representantes`]);
        return;
      } catch (error) {
        this.toasterService.showAlert('Falha ao editar representante!');
        console.error(error);
      }
    }
    try {
      await this.representanteService.criarRepresentante(this.buildRepresentanteObject());
      this.toasterService.showSuccess('Representante salvo com sucesso!');
      this.router.navigate([`./cliente/editar-cliente/${this.idCliente}/representantes`]);
    } catch (error) {
      this.toasterService.showAlert('Falha ao adicionar representante!');
      console.error(error);
    }
  }

  private buildRepresentanteObject(): ICriarRepresentanteRequest {
    return {
      idCliente: this.idCliente,
      identificacao: cpfCnpjUtil.limpaCnpjCpf(this.representanteForm.controls.cpfCnpj.value!),
      nome: this.representanteForm.controls.nome.value!,
    }
  }

  public cancelarAcao(): void {
    this.router.navigate(['./cliente/editar-cliente/representantes']);
  }

}
