import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nao-ha-dados',
  templateUrl: './nao-ha-dados.component.html',
  styleUrl: './nao-ha-dados.component.scss'
})
export class NaoHaDadosComponent {

  @Input() titulo = '';

}
