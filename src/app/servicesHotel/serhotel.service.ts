import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from 'src/interface/Hotel';

@Injectable({
  providedIn: 'root'
})
export class ServiceHotelService {
  private apiUrl = 'URL_DEL_API'; // Reemplaza 'URL_DEL_API' con la URL real de tu API de hoteles

  constructor(private http: HttpClient) { }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.apiUrl}/hotels`, hotel);
  }
  obtenerHotelPorId(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/hotels/${id}`);
  }

  obtenerTodosLosHoteles(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels`);
  }

  updateHotel(id: number, hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiUrl}/hotels/${id}`, hotel);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/hotels/${id}`);
  }
}
