import { Injectable } from '@angular/core';
import cartasData from '../../assets/data/cartas.json';

export interface Carta {
  id: number;
  nombre: string;
  rareza: 'común' | 'rara' | 'épica';
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  private cartas = cartasData as Carta[];

  private ponderacion = {
    común: 0.6,
    rara: 0.3,
    épica: 0.1
  };

  private obtenerCartasPorRareza(rareza: 'común' | 'rara' | 'épica'): Carta[] {
    return this.cartas.filter(carta => carta.rareza === rareza);
  }

    obtenerCartaAleatoria(): Carta {
    const cartasComunes = this.obtenerCartasPorRareza('común');
    const cartasRaras = this.obtenerCartasPorRareza('rara');
    const cartasEpicas = this.obtenerCartasPorRareza('épica');

    const probabilidad = Math.random();

    if (probabilidad < this.ponderacion.común) {
      return this.obtenerCartaAleatoriaDeLista(cartasComunes);
    } else if (probabilidad < this.ponderacion.común + this.ponderacion.rara) {
      return this.obtenerCartaAleatoriaDeLista(cartasRaras);
    } else {
      return this.obtenerCartaAleatoriaDeLista(cartasEpicas);
    }
  }

  private obtenerCartaAleatoriaDeLista(cartas: Carta[]): Carta {
    const indice = Math.floor(Math.random() * cartas.length);
    return cartas[indice];
  }

  obtenerMano(): Carta[] {
    const mano: Carta[] = [];
    for (let i = 0; i < 4; i++) {
      mano.push(this.obtenerCartaAleatoria());
    }
    return mano;
  }
}
