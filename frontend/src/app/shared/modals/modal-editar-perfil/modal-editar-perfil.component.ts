import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorsUtil } from '../../utils/errorsUtil';
import { ToasterService } from '../../components/toaster-controller/toaster.service';
import { SenhasUtil } from '../../utils/senhasUtil';
import { CryptoService } from '../../services/crypto.service';
import { ContaService } from '../../services/http/conta.service';

@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.component.html',
  styleUrl: './modal-editar-perfil.component.scss'
})
export class ModalEditarPerfilComponent {

  @Output() eventoConfirmarAcao = new EventEmitter<boolean>(false);

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private cryptoService: CryptoService,
    private contaService: ContaService,
  ) { }

  public ngOnInit(): void {
    this.obterDadosDoUsuarioLogado();
  }

  public editarPerfilForm = new FormGroup({
    nome: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    senhaAtual: new FormControl<string | null>(null, Validators.required),
    novaSenha: new FormControl<string | null>(null, Validators.required),
    confirmarSenha: new FormControl<string | null>(null, Validators.required),
  });

  public isAlterarSenhaChecked = false;

  public errosCustomizados = ErrorsUtil.getErrors;

  public verificarSenhaAtual(): void {
    //backend
  }

  public verificarSenhaForte(): void {
    const senhaForte = SenhasUtil.verificarSenhaForte(this.editarPerfilForm.controls.novaSenha.value ?? '');
    if (!senhaForte) {
      this.editarPerfilForm.controls.novaSenha.setErrors({
        senhaForaDoPadrao: true,
      })
    }
  }

  public verificarNovaSenha(): void {

    if (SenhasUtil.verificarSenhaForte(this.editarPerfilForm.controls.novaSenha.value ?? '')) {
      if (this.editarPerfilForm.controls.novaSenha.value !== this.editarPerfilForm.controls.confirmarSenha.value) {
        this.editarPerfilForm.controls.novaSenha.setErrors({
          senhasDiferentes: true,
        });
        this.editarPerfilForm.controls.confirmarSenha.setErrors({
          senhasDiferentes: true,
        });
      } else {
        this.editarPerfilForm.controls.novaSenha.setErrors(null);
        this.editarPerfilForm.controls.confirmarSenha.setErrors(null);
      }
    } else {
      this.editarPerfilForm.controls.novaSenha.setErrors({
        senhaForaDoPadrao: true,
      })
    }

  }

  public async editarPerfil(): Promise<void> {
    await this.contaService.editarConta({
      email: this.editarPerfilForm.controls.email.value!,
      nome: this.editarPerfilForm.controls.nome.value!,
      senha: this.editarPerfilForm.controls.novaSenha.value!,
    })
    this.eventoConfirmarAcao.emit(true);
    this.ngbActiveModal.close();
  }

  public habilitarCamposSenha(): void {
    this.isAlterarSenhaChecked = !this.isAlterarSenhaChecked;
  }

  private obterDadosDoUsuarioLogado(): void {
    const emailLocalStorage = localStorage.getItem('emailAutenticado') ?? '';
    const nomeLocalStorage = localStorage.getItem('nomeUsuario') ?? '';
    const emailDescriptografado = this.cryptoService.decrypt(emailLocalStorage);
    this.editarPerfilForm.patchValue({
      email: emailDescriptografado,
      nome: nomeLocalStorage,
    });
    this.editarPerfilForm.controls.email.disable();
  }
}
