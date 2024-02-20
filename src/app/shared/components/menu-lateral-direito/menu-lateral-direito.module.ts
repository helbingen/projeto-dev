import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralDireitoComponent } from './menu-lateral-direito.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuLateralDireitoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MenuLateralDireitoComponent
  ]
})
export class MenuLateralDireitoModule { }
