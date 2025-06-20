import { Injectable } from '@angular/core';
import sessionsData from '../../assets/data/sessions.json';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  getAllSessions() {
    return sessionsData.sessions as {
      id: number;
      fecha: string;
      titulo: string;
      resumen: string;
    }[];
  }
}
