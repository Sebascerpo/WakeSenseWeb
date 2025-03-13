import { Routes } from '@angular/router';
import { LoginComponent } from './wake-sense/modules/auth/pages/login/login.component';
import { RegistroComponent } from './wake-sense/modules/auth/pages/registro/registro.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'wake-sense',
    loadChildren: () => import('./wake-sense/wake-sense.routes').then(m => m.WakeSenseRoutes),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];

