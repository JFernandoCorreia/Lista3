import { Injectable } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  constructor() { }

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  somaGeral() { this.senhasGeral++;this.senhasTotal++;}
  somaPrior() { this.senhasPrior++;this.senhasTotal++;}
  somaExame() { this.senhasExame++;this.senhasTotal++;}

  senhas = [
    {
      'icon': 'accessibility',
      'color': 'primary',
      'numero': '202401 - SP01',
      'tm_geraçao': '2024-04-04 20:20:10'
    },
    {
      'icon': 'home',
      'color': 'dark',
      'numero': '202404  - SG01',
      'tm_geraçao': '2024-04-02 20:20:13'
    },
    {
      'icon': 'accessibility',
      'color': 'primary ',
      'numero': '202402  - SP02',
      'tm_geraçao': '2024-04-02 20:38:10'
    },
    {
      'icon': 'document',
      'color': 'warning',
      'numero': '202403  - SE01',
      'tm_geraçao': '2024-04-02 20:45:00'
    },
  ];

}
