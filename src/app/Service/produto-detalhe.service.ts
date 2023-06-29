import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDetalheService {

  public produtos: Array<any> = []; // Inicialize a propriedade com um array vazio
  
  constructor(){
    this.produtos = this.carregar(); 
    }
    carregar(){
      const produtosString = localStorage.getItem('produto');
      this.produtos = produtosString ? JSON.parse(produtosString) : [];
      return this.produtos;
    }
    buscarPorId(id: number) {
      return this.produtos.find((produto) => produto.id === id);
    }
}
