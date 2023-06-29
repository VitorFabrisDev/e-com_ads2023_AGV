import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { HomeComponent } from './home/home.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { ProdutoService } from './Service/produto.service';
import { CarrinhoComprasService } from './Service/carrinho-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    CarrinhoComprasComponent,
    HomeComponent,
    ProdutoDetalheComponent,
    ProdutoHomeComponent,
    AboutComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdutoService,CarrinhoComprasService],
  bootstrap: [AppComponent],
})
export class AppModule { }
