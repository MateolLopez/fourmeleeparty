import { Component, inject, signal } from '@angular/core';
import { DiosesService } from '../../services/dioses.service';


@Component({
  selector: 'app-dioses',
  standalone: true,
  imports: [],
  templateUrl: './dioses.component.html',
  styleUrl: './dioses.component.css'
})
export class DiosesComponent {
  private diosesService = inject(DiosesService);

  dioses = signal<any[]>([]);

  constructor() {
    this.loadData();
  }

  private loadData() {
    const data = this.diosesService.getAllDioses();
    this.dioses.set(data);
  }
}
