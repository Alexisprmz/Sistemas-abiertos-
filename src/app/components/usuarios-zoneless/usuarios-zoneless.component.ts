import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-usuarios-zoneless',
  imports: [],
  templateUrl: './usuarios-zoneless.component.html',
  styleUrl: './usuarios-zoneless.component.scss'
})
export class UsuariosZonelessComponent {
  nombre = signal('Alexis');
  edad = signal(21);

  nombreCapitalizado = signal('Alexis Peralta');

  cambiarNombre(nuevoNombre: string) {
    if (!nuevoNombre.trim()) return;
    this.nombre.set(nuevoNombre.trim());
  }

  cambiarEdad(nuevaEdad: string) {
    const edadNum = Number(nuevaEdad);
    if (!edadNum || edadNum < 1 || edadNum > 120) return;
    this.edad.set(edadNum);
  }

  cambiarNombreCapitalizado(nuevoNombreCap: string) {
    if (!nuevoNombreCap.trim()) return;
    this.nombre.set(nuevoNombreCap); 
  }

}
