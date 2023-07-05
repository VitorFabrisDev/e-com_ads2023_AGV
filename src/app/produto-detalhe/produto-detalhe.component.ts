import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../Service/produto.service';
import { CarrinhoComprasService } from '../Service/carrinho-compras.service';
import { Carrinho } from '../Interface/carrinho.interface';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  public nome: string = '';
  public preco: number = 0;
  public indice: number = 0;
  public descricao: string = '';
  public imagem: string | SafeResourceUrl = ''
  public quantidade: number = 1;
  

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoComprasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = +params.indice;
      const produtoDetalhes = this.produtoService.get(id);

      if (produtoDetalhes) {
        this.nome = produtoDetalhes.nome;
        this.preco = produtoDetalhes.preco;
        this.imagem = produtoDetalhes.imagem;
        this.descricao = produtoDetalhes.categoria.descricao;
      } else {
        console.log('O produto detalhado não foi encontrado.');
      }
    });
  }

  adicionarAoCarrinho(quantidade: number) {
    const produtoId = this.route.snapshot.params['indice'];
    const produtoDetalhes = this.produtoService.get(produtoId);
  
    if (produtoDetalhes) {
      const produto: Carrinho = {
        produto: produtoDetalhes.id,
        descricao: produtoDetalhes.nome,
        quantidade: quantidade,
        valor: produtoDetalhes.preco,
        imagem: this.carrinhoService.getImagemProduto(produtoDetalhes.id),
        id: 1 // Valor inicial do id
      };
  
      const produtoExistente = this.carrinhoService.getProdutoPeloId(produto.produto);
  
      if (produtoExistente) {
        produto.produto = produtoExistente.id;
      } else {
        // Obtém o último id do carrinho e incrementa 1
        const ultimoId = this.carrinhoService.obterUltimoIdCarrinho();
        produto.id = ultimoId + 1;
      }
  
      this.carrinhoService.adicionarProdutoComQuantidade(produto);
    } else {
      console.log('O produto detalhado não foi encontrado.');
    }
  }
  
  
  
  
}