import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhas: any[] = [];

  constructor() { }

  adicionarSenha(senha: any) {
    this.senhas.push(senha);
  }

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;


  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }

  senhaArray: { [key: string]: string[] } = {
    'SG': [],
    'SP': [],
    'SE': []
  };

  inputNovaSenha: string = '';

  novaSenha(tipoSenha: string = "") {
    if (tipoSenha == 'SG') {
      this.somaGeral();
      const novaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhaArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhaArray['SG'].push(novaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      const novaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhaArray[tipoSenha].length + 1).toString().padStart(2, '0');
      this.senhaArray[tipoSenha].push(novaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      const novaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhaArray[tipoSenha].length + 1).toString().padStart(2, '0');
      this.senhaArray[tipoSenha].push(novaSenha);
    }
    console.log(this.senhaArray);
  }
}
