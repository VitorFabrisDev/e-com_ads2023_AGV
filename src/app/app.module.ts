import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
