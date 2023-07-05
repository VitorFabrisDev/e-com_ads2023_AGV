import { Component } from '@angular/core';
import { Carrinho } from '../Interface/carrinho.interface';
import { CarrinhoComprasService } from '../Service/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
  
})
export class CarrinhoComprasComponent {
 public carrinho: Carrinho[] = [];
 subtotal: number = 0;
 total: number = 0;


  constructor(public carrinhoService: CarrinhoComprasService) {
    this.carrinho = this.carrinhoService.getCarrinho();
  }
  atualizarQuantidade(item: Carrinho): void {
    this.carrinhoService.alterarProdutoComQuantidade(item);
  }
  removerItem(id: number): void {
    this.carrinhoService.removerDoCarrinho(id);
    console.log(id);
  }
  calcularSubtotal(): number {
    this.subtotal = this.carrinho.reduce((total, item) => total + (item.valor * item.quantidade), 0);
    return this.subtotal;
  }

  calcularTotal(): number {
    this.total = this.carrinho.reduce((total, item) => total + (item.valor * item.quantidade), 0);
    return this.total;
  }
}
