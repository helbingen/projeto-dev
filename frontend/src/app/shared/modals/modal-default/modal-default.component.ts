import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TipoBotao } from '@decisaosistemas/angular-ds';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-default',
  templateUrl: './modal-default.component.html',
  styleUrl: './modal-default.component.scss'
})
export class ModalDefaultComponent {

  @Input() textoHeader = '';
  @Input() textoDescricao = '';
  @Input() labelBotao = '';
  @Input() tipoBotaoConfirmarAcao: TipoBotao = 'DANGER';
  @Output() confirmarAcao = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) { }

  public confirmarAcaoModal(): void {
    this.confirmarAcao.emit(true);
    this.activeModal.close();
  }
}
