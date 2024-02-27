import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterControllerComponent } from './toaster-controller.component';
import { ToasterService } from './toaster.service';
import { ToasterModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    ToasterControllerComponent
  ],
  imports: [
    CommonModule,
    ToasterModule,
  ],
  providers: [
    ToasterService
  ],
  exports: [ToasterControllerComponent]
})
export class ToasterControllerModule { }
