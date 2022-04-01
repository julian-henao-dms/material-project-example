import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.scss']
})
export class CrearUsuariosComponent implements OnInit {
sexos: any[] = ['Femenino', 'Masculino', 'No Binario'];
form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router: Router, 
    private _usuarioService: UsuarioService) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  guardarUsuario(){
     const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    }

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);

    this._snackBar.open('El Usuario fue agregado correctamente', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }
}
