import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral-direito',
  templateUrl: './menu-lateral-direito.component.html',
  styleUrl: './menu-lateral-direito.component.scss'
})
export class MenuLateralDireitoComponent {

  @Input() identificacao: string = '';

}
