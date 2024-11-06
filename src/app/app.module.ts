import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { DxSelectBoxModule, DxTextBoxModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    AppRoutingModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
