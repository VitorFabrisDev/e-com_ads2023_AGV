import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showLoginModal: boolean = false;
  username: string = '';
  password: string = '';

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  login() {
    // Lógica de autenticação
    // ...

    // Resetar os campos de login
    this.username = '';
    this.password = '';

    // Fechar a janela de login
    this.closeLoginModal();
  }
}
