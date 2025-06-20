import { Injectable } from '@angular/core';
import diosesDataRaw from '../../assets/data/dioses.json';

const diosesData: any[] = diosesDataRaw as any[];

@Injectable({
  providedIn: 'root'
})
export class DiosesService {

  getAllDioses() {
    return diosesData;
  }

  getDiosByName(name: string) {
    return diosesData.find(dios => dios.name === name);
  }
}
