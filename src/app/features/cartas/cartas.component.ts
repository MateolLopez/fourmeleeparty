import { Component, inject, signal } from '@angular/core';
import { CartasService, Carta } from '../../services/cartas.service';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  private cartasService = inject(CartasService);
  mano = signal<Carta[]>([]);

  constructor() {
    this.mano.set(this.cartasService.obtenerMano());
  }

  recargarMano() {
    this.mano.set(this.cartasService.obtenerMano());
  }
}
