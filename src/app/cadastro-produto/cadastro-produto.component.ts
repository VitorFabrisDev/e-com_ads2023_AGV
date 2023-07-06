import { Component } from '@angular/core';
import { ProdutoService } from '../Service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  caminhoImagemPredefinido = 'assets/Template/img/product/';

  produto: any = {}; // Objeto para armazenar os dados do produto a ser cadastrado
  nomeInvalido = false;
  precoInvalido = false;
  imagemInvalida = false;
  descricaoInvalida = false;

  constructor(private produtoService: ProdutoService) {}

  cadastrarProduto(): void {
    // Validar campos obrigatórios
    if (!this.produto.nome) {
      this.nomeInvalido = true;
      return;
    }
    if (isNaN(this.produto.preco)) {
      this.precoInvalido = true;
      return;
    }
    if (!this.produto.imagem) {
      this.imagemInvalida = true;
      return;
    }
    if (!this.produto.descricao) {
      this.descricaoInvalida = true;
      return;
  }
  
    const ultimoIdCadastrado = this.produtoService.obterUltimoIdCadastrado();
    const novoId = ultimoIdCadastrado + 1;
    this.produto.id = novoId;
    
    // Concatenar o caminho padrão da imagem
    this.produto.imagem = this.caminhoImagemPredefinido + this.produto.imagem;
    
    this.produtoService.cadastrarProduto(this.produto);
    this.produto = {};
  
    this.nomeInvalido = false;
    this.precoInvalido = false;
    this.imagemInvalida = false;
    this.descricaoInvalida = false;
  }

  substituirVirgulaPorPonto(): void {
    this.produto.preco = this.produto.preco.replace(',', '.');
  }
}