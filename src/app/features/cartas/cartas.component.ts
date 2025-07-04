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
  manoSize = signal<number>(5); // Nueva señal para el tamaño de la mano

  constructor() {
    this.mano.set(this.cartasService.obtenerMano(this.manoSize()));
  }

  onManoSizeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    if (!isNaN(value) && value > 0) {
      this.manoSize.set(value);
    }
  }

  recargarMano(size?: number): void {
    const cantidad = size ?? this.manoSize();
    this.mano.set(this.cartasService.obtenerMano(cantidad));
  }
}
