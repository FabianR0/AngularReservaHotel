import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/interface/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  

  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }
  /*findUserById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/obtenerUsuarioPorId?id=${id}`);
  }

  createUser(userDTO: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, userDTO);
  }

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  updateUser(id: number, userDTO: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, userDTO);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }*/
}
