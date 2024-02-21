import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss',
})
export class LocalizacaoComponent {

  constructor(public ngbModal: NgbModal) {
  }

  public modalConfig = {
    backdrop: true,
    animation: true,
    centered: true,
    size: 'lg',
    windowClass: '',
    keyboard: true,
  }

  public abrirModalEndereco(): void {
    this.ngbModal.open(EnderecoModalComponent, {
      backdrop: 'static',
      centered: true,
      size: 'lg',
      // windowClass: '',
      keyboard: true,
    });
  }

}
