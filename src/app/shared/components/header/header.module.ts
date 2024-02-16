import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AvatarModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
