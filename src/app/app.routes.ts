import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter/counter-page.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosZonelessComponent } from './components/usuarios-zoneless/usuarios-zoneless.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'usuarioZoneless',
    component: UsuariosZonelessComponent,
  },
  {
    path: '/hero',
    component: HeroPageComponent,
  },
];
