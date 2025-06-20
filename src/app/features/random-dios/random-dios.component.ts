import { Component, inject, signal } from '@angular/core';
import { RandomDiosService, RandomDios } from '../../services/random-dios.service';

@Component({
  selector: 'app-random-dios',
  standalone: true,
  imports: [],
  templateUrl: './random-dios.component.html',
  styleUrls: ['./random-dios.component.css']
})
export class RandomDiosComponent {
  private svc = inject(RandomDiosService);

  dios = signal<RandomDios | null>(null);

  constructor() {
    this.next(); // iniciamos con esto, ya no hay ngOnInit con Zoneless
  }

  next() {
    this.dios.set(this.svc.getRandom());
  }
}