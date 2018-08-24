import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import { DxButtonModule} from 'devextreme-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
