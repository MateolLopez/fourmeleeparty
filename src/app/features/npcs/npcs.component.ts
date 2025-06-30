import { Component, inject, signal } from '@angular/core';
import { NpcsService } from '../../services/npcs.service';

@Component({
  selector: 'app-npcs',
  standalone: true,
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent {
  private npcService = inject(NpcsService);
  
  npcs = signal<Record<string, any[]>>({});
  locaciones = signal<string[]>([]);
  locacionActual = signal<string | null>(null);

  constructor() {
    this.loadData();
  }

  private loadData() {
    const data = this.npcService.getAllNpcs();
    this.npcs.set(data);
    this.locaciones.set(Object.keys(data));
  }

selectLocacion(loc: string) {
  this.locacionActual.set(loc);
}
}