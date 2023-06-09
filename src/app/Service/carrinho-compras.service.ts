import { Injectable } from '@angular/core';
import { Carrinho } from '../Interface/carrinho.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Produto } from '../Interface/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {
  private carrinho: Carrinho[] = [];

  constructor(private domSanitizer: DomSanitizer) {
    this.carregarCarrinhoDoLocalStorage();
  }

  adicionarAoCarrinho(carrinho: Carrinho): void {
    const carrinhoExistente = this.carrinho.find(item => item.produto === carrinho.produto);
    if (carrinhoExistente) {
      carrinhoExistente.quantidade += 1;
    } else {
      this.carrinho.push(carrinho);
    }
    this.salvarCarrinhoNoLocalStorage();
  }

  removerDoCarrinho(id: number): void {
    const index = this.carrinho.findIndex(carrinho => carrinho.id === id);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
      this.salvarCarrinhoNoLocalStorage();
    }
  }

  limparCarrinho(): void {
    this.carrinho = [];
    this.salvarCarrinhoNoLocalStorage();
  }

  adicionarProdutoComQuantidade(produto: Carrinho): void {
    const produtoExistente = this.carrinho.find(item => item.produto === produto.produto);
  
    if (produtoExistente) {
      produtoExistente.quantidade = produto.quantidade;
    } else {
      this.carrinho.push(produto);
    }
    this.salvarCarrinhoNoLocalStorage();
  }

  alterarProdutoComQuantidade(item: Carrinho): void {
    const produtoExistente = this.carrinho.find(p => p.produto === item.produto);
    
    if (produtoExistente) {
      produtoExistente.quantidade = item.quantidade;
    } else {
      this.carrinho.push(item);
    }
    this.salvarCarrinhoNoLocalStorage();
  }
 
  criarItem(id: number, descricao: string, quantidade: number, valor: number): Carrinho {
    const imagem = this.getImagemProduto(id);
  
    return {
      id: this.obterUltimoIdCarrinho() + 1,
      produto: id,
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
  getImagemProduto(idProduto: number): string {
    const produtosJSON = localStorage.getItem('produtos');
    if (produtosJSON) {
      const produtos: Produto[] = JSON.parse(produtosJSON);
      const produto = produtos.find(p => p.id === idProduto);
      if (produto && produto.imagem) {
        return produto.imagem.replace('product', 'shopping-cart');
      }
    }
    return '';
  }
  
  getProdutoPeloId(produtoId: number): Carrinho | undefined {
    return this.carrinho.find(item => item.produto === produtoId);
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
  obterUltimoIdCarrinho(): number {
    const carrinho = this.getCarrinho();
    if (carrinho.length === 0) {
      return 0; 
    }

    const ultimoItem = carrinho[carrinho.length - 1];
  
    return ultimoItem.id; 
  }
}