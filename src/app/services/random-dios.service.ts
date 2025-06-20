import { Injectable } from '@angular/core';
import datos from '../../assets/data/randomdioses.json';

export interface RandomDios {
  id: number;
  name: string;
  alignment: string;
  favor: string;
  debt: string;
}

@Injectable({
  providedIn: 'root'
})

export class RandomDiosService {
  private lista = datos as RandomDios[];

  getRandom(): RandomDios {
    const idx  = Math.floor(Math.random() * this.lista.length);
    return this.lista[idx];
  }
}
