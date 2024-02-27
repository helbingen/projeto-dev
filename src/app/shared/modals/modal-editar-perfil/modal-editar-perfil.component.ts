import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorsUtil } from '../../utils/errorsUtil';
import { ToasterService } from '../../components/toaster-controller/toaster.service';
import { SenhasUtil } from '../../utils/senhasUtil';

@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.component.html',
  styleUrl: './modal-editar-perfil.component.scss'
})
export class ModalEditarPerfilComponent {

  constructor(public ngbActiveModal: NgbActiveModal, private toasterService: ToasterService) { }

  @Output() eventoConfirmarAcao = new EventEmitter<boolean>(false);

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

  public editarPerfil(): void {
    this.eventoConfirmarAcao.emit(true);
    this.ngbActiveModal.close();
  }

  public habilitarCamposSenha(): void {
    this.isAlterarSenhaChecked = !this.isAlterarSenhaChecked;
  }
}
