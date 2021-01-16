import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCompComponent } from './components/table-comp/table-comp.component';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TableCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [     AppComponent
]
})
export class AppModule {
 }
