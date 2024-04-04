import { Injectable } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  constructor() { }

  senhas = [
    {
      'icon': 'accessibility',
      'color': 'primary',
      'numero': '248402 - SP01',
      'tm_geraçao': '2024-04-02 20:20:10'
    },
    {
      'icon': 'home',
      'color': 'dark',
      'numero': '248402 - SG01',
      'tm_geraçao': '2024-04-02 20:20:13'
    },
    {
      'icon': 'accessibility',
      'color': 'primary ',
      'numero': '248402 - SP02',
      'tm_geraçao': '2024-04-02 20:38:10'
    },
    {
      'icon': 'document',
      'color': 'warning',
      'numero': '248402 - SE01',
      'tm_geraçao': '2024-04-02 20:45:00'
    },
  ];

}
