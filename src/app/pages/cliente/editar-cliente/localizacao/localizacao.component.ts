import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from './modals/endereco-modal/endereco-modal.component';
import { ToasterService } from '../../../../shared/components/toaster-controller/toaster.service';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss',
})
export class LocalizacaoComponent {

  constructor(public ngbModal: NgbModal, private toasterService: ToasterService) {
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
    const modalRef = this.ngbModal.open(EnderecoModalComponent, {
      backdrop: 'static',
      centered: true,
      size: 'lg',
      // windowClass: '',
      keyboard: true,
    });
    modalRef.componentInstance.confirmacaoSalvarEndereco.subscribe((response: boolean) => {
      response ? this.toasterService.showSuccess('Endereço adicionado com sucesso!') : this.toasterService.showDanger('Erro ao adicionar endereço')
    })
  }

}
