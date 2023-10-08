import { Component } from '@angular/core';
import { Users} from 'src/app/models/users'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
  
export class UsuarioComponent {

  usuarioId: Users[]=[
    {id:1,nombre:"Fabian", telefono:12345,documento:54321,email:"utp@gmail.com",contrasena:"angular"},
    {id:2,nombre:"Fabian2",telefono:123456,documento:543217,email:"utp2@gmail.com",contrasena:"angularr"},
    {id:3,nombre:"Fabian3", telefono:123457,documento:543218,email:"utp3@gmail.com",contrasena:"angulare"}
  ];

  insertUser: Users = new Users();

  addOrEdit(){
    if(this.insertUser.id === 0){
      this.insertUser.id = this.usuarioId.length + 1;
      this.usuarioId.push(this.insertUser);
    }
    this.insertUser = new Users();
  }

  openEdit(recibeUser :Users){
    this.insertUser = recibeUser;
  }

  delete(){
    if (confirm('esta seguro de eliminar?')) {
      this.usuarioId = this.usuarioId.filter(x => x != this.insertUser);
      this.insertUser = new Users();
    }
    
  }

private baseUrl = 'http://localhost:8080/api/usuarios';


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
  // public createUser(user: Usuario): Observable<Usuario> {
  //   return this.http.post<Usuario>(this.baseUrl, user);
  // }

  // public getAllUsers(): Observable<Usuario[]> {
  //   return this.http.get<Usuario[]>(this.baseUrl);
  // }

  // public updateUser(id: number, user: Usuario): Observable<Usuario> {
  //   return this.http.put<Usuario>(`${this.baseUrl}/${id}`, user);
  // }

  // public deleteUser(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
}
