import { Component, inject, signal } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-bitacora',
  standalone: true,
  imports: [],
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent {
  private sessionsService = inject(SessionsService);
  sessions = signal<{ id: number; fecha: string; titulo: string; resumen: string; expanded: boolean }[]>([]);

  constructor() {
    const data = this.sessionsService.getAllSessions()
      .map(s => ({ ...s, expanded: false }));
    this.sessions.set(data);
  }

  toggle(id: number) {
    this.sessions.update(arr =>
      arr.map(s => s.id === id ? { ...s, expanded: !s.expanded } : s)
    );
  }
}