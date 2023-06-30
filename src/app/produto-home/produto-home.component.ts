import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../Service/produto.service';
import { CarrinhoComprasService } from '../Service/carrinho-compras.service';
import { Produto } from '../Interface/produto.interface';


@Component({
  selector: 'app-produto-home',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css']
})
export class ProdutoHomeComponent {
  public produtos:Array<any> = [];
  constructor(
    public router:Router,
    public produto_service:ProdutoService,
    public carrinho_service:CarrinhoComprasService
  ){

  }
  ngOnInit(): void {
    this.produtos = this.produto_service.getAll();
  }
  redirecionarParaDetalheProduto(id:number): void {
    this.router.navigate(['/produtodetalhe/',+id] );
  }
  adicionarAoCarrinho(produto: Produto): void {
    const carrinhoItem = this.carrinho_service.criarItem(
      produto.id,
      produto.nome,
      1, 
      produto.preco
    );
    this.carrinho_service.adicionarAoCarrinho(carrinhoItem);
  }
}
