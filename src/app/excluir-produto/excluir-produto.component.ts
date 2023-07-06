import { Component } from '@angular/core';
import { ProdutoService } from '../Service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent {
  public produtos:Array<any> = [];
  constructor(
    public router:Router,
    public produto_service:ProdutoService,
  ){

  }
  ngOnInit(): void {
    this.produtos = this.produto_service.getAll();
  }

  excluirProduto(id: number): void{
    this.produto_service.excluirProduto(id);
    console.log(id);
  }

}
