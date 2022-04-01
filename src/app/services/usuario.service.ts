import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: 'jvalencia', nombre: 'Juan', apellido: 'Valencia', sexo: 'Masculino'},
    {usuario: 'lperez', nombre: 'Lina', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'jhenao', nombre: 'Julian', apellido: 'Henao', sexo: 'Masculino'},
    {usuario: 'fernanda99', nombre: 'Fernanda', apellido: 'Ramirez', sexo: 'Femenino'},
    {usuario: 'cvelez', nombre: 'Carlos', apellido: 'Velez', sexo: 'No binario'},
    {usuario: 'edhenao', nombre: 'Edwin', apellido: 'Henao', sexo: 'Masculino'},
    {usuario: 'luisac', nombre: 'Luisa', apellido: 'Cardona', sexo: 'Otro'},
    {usuario: 'akashah', nombre: 'Akasha', apellido: 'Henao', sexo: 'Femenino'},
  
  ];

  constructor() { }

  getUsuario(){
   return this.listaUsuarios.slice();
  }

  eliminarUsuario(index: number){
this.listaUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listaUsuarios.unshift(usuario);
  }
}
