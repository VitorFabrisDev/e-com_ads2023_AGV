import { Injectable } from '@angular/core';
import { Cliente } from '../Interface/cliente.interface';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = []; // Array para armazenar os clientes
  private storageKey = 'clientes'; // Chave para acessar os dados no LocalStorage

  constructor() {
    const storedClientes = localStorage.getItem(this.storageKey);

    if (storedClientes) {
      this.clientes = JSON.parse(storedClientes);
    }
  }

  cadastrarCliente(cliente: Cliente): void {
    const cpfExistente = this.clientes.find(c => c.cpf === cliente.cpf);

    if (cpfExistente) {
      cpfExistente.nome = cliente.nome;
      cpfExistente.endereco = cliente.endereco;
      cpfExistente.complemento = cliente.complemento;
      cpfExistente.cidade = cliente.cidade;
      cpfExistente.uf = cliente.uf;
      cpfExistente.cep = cliente.cep;
      cpfExistente.telefone = cliente.telefone;
      cpfExistente.email = cliente.email;
      cpfExistente.senha = cliente.senha;
    } else {
      cliente.id = this.clientes.length + 1;
      this.clientes.push(cliente);
    }

    this.salvarClientesNoStorage();
  }

  private salvarClientesNoStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.clientes));
  }
}