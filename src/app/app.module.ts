import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { TableCompComponent } from './components/table-comp/table-comp.component';

@NgModule({
  declarations: [
   // AppComponent,
    TableCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [TableCompComponent]
})
export class AppModule {
 constructor(private injector: Injector) {

      }
      ngDoBootstrap() {
         const el = createCustomElement(TableCompComponent, { injector:this.injector });
        customElements.define('app-table-comp', el);
      }

 }
