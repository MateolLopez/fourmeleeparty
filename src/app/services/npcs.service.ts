import { Injectable } from '@angular/core';
import npcsData from '../../assets/data/npcs.json';

@Injectable({ providedIn: 'root' })
export class NpcsService {
  getAllNpcs() {
    return npcsData;
  }
}