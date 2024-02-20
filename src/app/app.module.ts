import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { LogadoLayoutModule } from './layouts/logado-layout/logado-layout.module';
import { ToasterControllerModule } from './shared/components/toaster-controller/toaster-controller.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginLayoutModule,
    LogadoLayoutModule,
    ToasterControllerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
