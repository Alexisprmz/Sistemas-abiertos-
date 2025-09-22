import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
 datosUsuario = {
    nombre: 'Alexis',
    edad: 21,
    nombreCapitalizado: 'Alexis Peralta'
  };

  cambiarNombre(nuevoNombre: string) {
    if (!nuevoNombre.trim()) return;
    this.datosUsuario.nombre = nuevoNombre.trim();
  }

  cambiarEdad(nuevaEdad: string) {
    const edad = Number(nuevaEdad);
    if (!edad || edad < 1 || edad > 120) return;
    this.datosUsuario.edad = edad;
  }

  cambiarNombreCapitalizado(nuevoNombreCap: string) {
    if (!nuevoNombreCap.trim()) return;
    this.datosUsuario.nombreCapitalizado = nuevoNombreCap.toUpperCase();
  }
}
