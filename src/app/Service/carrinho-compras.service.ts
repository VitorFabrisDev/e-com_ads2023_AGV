import { Injectable } from '@angular/core';
import { Carrinho } from '../Interface/carrinho.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {
  private carrinho: Carrinho[] = [];

  adicionarAoCarrinho(carrinho: Carrinho): void {
    this.carrinho.push(carrinho);
    this.salvarCarrinhoNoLocalStorage();
  }

  removerDoCarrinho(id: number): void {
    const index = this.carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
      this.salvarCarrinhoNoLocalStorage();
    }
  }

  limparCarrinho(): void {
    this.carrinho = [];
    this.salvarCarrinhoNoLocalStorage();
  }

  alterarQuantidade(id: number, quantidade: number): void {
    const carrinho = this.carrinho.find(carrinho => carrinho.id === id);
    if (carrinho) {
      carrinho.quantidade = quantidade;
      this.salvarCarrinhoNoLocalStorage();
    }
  }

  criarItem(id: number, descricao: string, quantidade: number, valor: number): Carrinho {
    const imagem = `assets/Template/img/shopping-cart/cart-${id}.jpg`;

    return {
      id,
      produto: id, // Pode ser diferente do ID, dependendo da lógica de produto no seu sistema
      descricao,
      quantidade,
      valor,
      imagem
    };
  }

  getCarrinho(): Carrinho[] {
    this.carregarCarrinhoDoLocalStorage();
    return this.carrinho;
  }

  private salvarCarrinhoNoLocalStorage(): void {
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  private carregarCarrinhoDoLocalStorage(): void {
    const carrinhoJson = localStorage.getItem('carrinho');
    if (carrinhoJson) {
      this.carrinho = JSON.parse(carrinhoJson);
    }
  }
}