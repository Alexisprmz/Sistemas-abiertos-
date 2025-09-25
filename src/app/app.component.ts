import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosZonelessComponent } from './components/usuarios-zoneless/usuarios-zoneless.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UsuarioComponent, UsuariosZonelessComponent,HeroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-proyecto-angular19';
}
