import { Component } from '@angular/core';
import { Carrinho } from '../Interface/carrinho.interface';
import { CarrinhoComprasService } from '../Service/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
  
})
export class CarrinhoComprasComponent {
  carrinho: Carrinho[];

  constructor(private carrinhoService: CarrinhoComprasService) {
    this.carrinho = this.carrinhoService.getCarrinho();
  }
}
