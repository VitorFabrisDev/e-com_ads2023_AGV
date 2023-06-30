import { Component } from '@angular/core';
import { ClienteService } from '../Service/cliente.service';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  cliente: any = {}; // Objeto para armazenar os dados do cliente a ser cadastrado

  constructor(private clienteService: ClienteService) {}

  cadastrarCliente(): void {
    this.clienteService.cadastrarCliente(this.cliente);
    this.cliente = {}; // Limpa o objeto do cliente após o cadastro
  }
}