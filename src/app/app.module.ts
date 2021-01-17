import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { TableCompComponent } from './components/table-comp/table-comp.component';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    //AppComponent,
    TableCompComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  entryComponents: [TableCompComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ] 
})
export class AppModule {
    constructor(
    private injector: Injector
  ){

  }

  ngDoBootstrap(){
    const component = createCustomElement(TableCompComponent, {injector: this.injector});
    customElements.define('ce-table', component);
  }
 }
