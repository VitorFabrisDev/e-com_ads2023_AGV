import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../Service/produto.service';

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
  public imagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = +params.indice;
      const produtoDetalhes = this.produtoService.getProdutoById(id);

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
}