import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carrinho', component: CarrinhoComprasComponent },
  { path: 'cliente', component: CadastroClienteComponent },
  { path: 'produtodetalhe', component: ProdutoDetalheComponent },
  { path: 'produtodetalhe/:indice', component: ProdutoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, *{enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }