import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  inputNovaSenha: string = '';

  constructor(public senhasService: SenhasService) {}

  novaSenha(tipo: string) {
    const novaSenha = this.gerarNovaSenha(tipo);
    this.senhasService.adicionarSenha({
      icon: this.definirIcone(tipo),
      color: this.definirCor(tipo),
      numero: novaSenha
    });
  }

  gerarNovaSenha(tipo: string): string {
    // Implemente a lógica para gerar a nova senha aqui
    return '';
  }

  definirIcone(tipo: string): string {
    // Implemente a lógica para definir o ícone com base no tipo aqui
    return '';
  }

  definirCor(tipo: string): string {
    // Implemente a lógica para definir a cor com base no tipo aqui
    return '';
  }

}
