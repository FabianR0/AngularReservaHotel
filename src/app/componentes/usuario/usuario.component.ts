import { Component } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuario: Usuario;
  usuarioId: any[]=[];
  
private baseUrl = 'http://localhost:8080/api/usuarios';

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos del usuario a un servicio o realizar otras acciones necesarias.
    console.log('Datos del usuario:', this.usuario);
    // Por ejemplo, puedes enviar los datos a un servicio para guardarlos en el servidor.
  }
 constructor(private http: HttpClient){
  this.usuario = {contrasena:'',email:'', nombre: '', telefono: '', documento: ''};
 }
  ngOnInit(): void {
    
  }
  //aqui es la validacion de correo
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

//aqui es el crud
  public createUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, user);
  }

  public getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  public updateUser(id: number, user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${id}`, user);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
