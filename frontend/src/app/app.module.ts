import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { LogadoLayoutModule } from './layouts/logado-layout/logado-layout.module';
import { ToasterControllerModule } from './shared/components/toaster-controller/toaster-controller.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginLayoutModule,
    LogadoLayoutModule,
    ToasterControllerModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
