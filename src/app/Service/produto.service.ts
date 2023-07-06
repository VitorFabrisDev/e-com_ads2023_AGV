import { Injectable } from '@angular/core';
import { Produto } from '../Interface/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public produtos:Array<any> = [];
  private storageKey = "produtos"
  
  constructor(){
    const storedProdutos = localStorage.getItem(this.storageKey);
    if (storedProdutos) {
      this.produtos = JSON.parse(storedProdutos);
    }
    this.carregar();
  }

  carregar(){
    this.produtos = JSON.parse(String(localStorage.getItem('produtos')));
  }
  getAll(){
    return this.produtos;
  }

  get(produto_id:number){
    return this.produtos.find((produto:any)=>{
      if (produto.id == produto_id){
        return produto;
      }
    });
  }
  cadastrarProduto(produto: Produto): void {
    const produtoExistente = this.produtos.find(p => p.id === produto.id);
  
    if (produtoExistente) {
      produtoExistente.nome = produto.nome;
      produtoExistente.preco = produto.preco;
      produtoExistente.imagem = produto.imagem;
      produtoExistente.descricao = produto.descricao;
    } else {
      this.produtos.push(produto);
    }
  
    this.salvarProdutosNoStorage();
  }


  private salvarProdutosNoStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.produtos));
  }

  obterUltimoIdCadastrado(): number {
    let ultimoId = 0;
    
    this.produtos.forEach((produto: Produto) => {
      if (produto.id > ultimoId) {
        ultimoId = produto.id;
      }
    });
    
    return ultimoId;
  }

  excluirProduto(id: number): void{
    const index = this.produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      this.salvarProdutosNoStorage();
    }
  }

}
