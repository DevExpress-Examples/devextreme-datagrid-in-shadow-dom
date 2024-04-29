import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxBulletModule, DxTemplateModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
