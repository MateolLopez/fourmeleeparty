import { Routes } from '@angular/router';
import { NpcsComponent } from './features/npcs/npcs.component';
import { BitacoraComponent } from './features/bitacora/bitacora.component';
import { DiosesComponent } from './features/dioses/dioses.component';
import { MapaComponent } from './features/mapa/mapa.component';
import { RandomDiosComponent } from './features/random-dios/random-dios.component';
import { CartasComponent } from './features/cartas/cartas.component';
import { DmComponent } from './features/dm/dm.component';

import { Landing } from './features/landing/landing';
import { Layout } from './shared/layout/layout';


export const routes: Routes = [
     { path: '', component: Landing },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'npcs', component: NpcsComponent },
      { path: 'bitacora', component: BitacoraComponent },
      { path: 'dioses', component: DiosesComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'random-dios', component: RandomDiosComponent },
      { path: 'cartas', component: CartasComponent },
      { path: 'dm', component: DmComponent },
    ]
  }
];