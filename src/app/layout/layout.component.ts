import { Component } from '@angular/core';
import { ClienteService } from '../Service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showLoginModal: boolean = false;
    username: string = '';
    password: string = '';
    clienteLogado: boolean = false;
    nomeCliente: string = '';

    ngOnInit() {
      const cliente = sessionStorage.getItem('cliente');
      if (cliente) {
        this.clienteLogado = true;
        this.nomeCliente = JSON.parse(cliente).nome;
      }
    }

  constructor(private clienteService: ClienteService, private router: Router) {}
  
  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  login() {
    const cliente = this.clienteService.buscarClientePorCpfOuEmail(this.username);

    if (cliente && cliente.senha === this.password) {
      console.log('Cliente autenticado com sucesso!');
      sessionStorage.setItem('cliente', JSON.stringify(cliente));
      console.log('ID do cliente armazenado:', cliente.id);
      window.location.reload();
    } else {
      console.log('Credenciais inválidas!');
    }

    this.username = '';
    this.password = '';
    this.closeLoginModal();
  }
  isClienteLogado(): boolean {
    return this.clienteLogado;
  }
  logoff() {
    sessionStorage.removeItem('cliente');
    this.clienteLogado = false;
  }
}
