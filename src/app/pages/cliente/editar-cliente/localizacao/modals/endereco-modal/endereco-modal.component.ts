import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoMascarasEnum } from '@decisaosistemas/angular-ds';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CepService } from '../../../../../../shared/services/cep.service';
import { ICepInterface } from '../../../../../../shared/services/models/ICepInterface';
import { ErrorsUtil } from '../../../../../../shared/utils/errorsUtil';
import { IEnderecoInterface } from '../../models/IEnderecoInterface';

@Component({
  selector: 'app-endereco-modal',
  templateUrl: './endereco-modal.component.html',
  styleUrl: './endereco-modal.component.scss',
})
export class EnderecoModalComponent {

  @Input() tituloModal: string = '';
  @Input() labelBotao: string = '';
  @Input() endereco!: IEnderecoInterface;
  @Output() confirmacaoSalvarEndereco: EventEmitter<boolean> = new EventEmitter<boolean>(false)

  constructor(public ngbActiveModal: NgbActiveModal, private cepService: CepService) { }

  public ngOnInit(): void {
    if (this.tituloModal === 'Editar endereço') {
      this.preencherInputsEnderecoParaEdicao(this.endereco);
    }
  }

  public mascaraCep = TipoMascarasEnum.cep;
  public errosCustomizados = ErrorsUtil.getErrors;

  public enderecoForm = new FormGroup({
    cep: new FormControl<string | null>(null, Validators.required),
    logradouro: new FormControl<string | null>(null, Validators.required),
    numero: new FormControl<number | null>(null, Validators.required),
    complemento: new FormControl<string | null>(null),
    bairro: new FormControl<string | null>(null, Validators.required),
    cidade: new FormControl<string | null>(null, Validators.required),
    estado: new FormControl<string | null>(null, Validators.required),
  })

  public async consultaCep(): Promise<void> {
    if (this.enderecoForm.controls.cep.value) {
      const retornoApiViaCep = await this.cepService.obterDadosViaCep(this.enderecoForm.controls.cep.value);
      if (!retornoApiViaCep.erro) {
        this.preencherEnderecoViaCep(retornoApiViaCep);
      } else {
        this.enderecoForm.controls.cep.setErrors({
          cepInexistente: true,
        })
      }
    }
  }

  private preencherEnderecoViaCep(pCep: ICepInterface) {
    this.enderecoForm.patchValue({
      logradouro: pCep.logradouro,
      complemento: pCep.complemento,
      bairro: pCep.bairro,
      cidade: pCep.localidade,
      estado: pCep.uf,
    })
  }

  public salvarEndereco(): void {
    this.confirmacaoSalvarEndereco.emit(true);
    this.ngbActiveModal.close();
  }

  private preencherInputsEnderecoParaEdicao(pEndereco: IEnderecoInterface) {
    this.enderecoForm.patchValue({
      logradouro: pEndereco.logradouro,
      complemento: pEndereco.complemento,
      numero: pEndereco.numero,
      bairro: pEndereco.bairro,
      cidade: pEndereco.cidade,
      estado: pEndereco.estado,
      cep: pEndereco.cep,
    })
  }

}
