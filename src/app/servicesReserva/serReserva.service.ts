import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceReservaService {
  private reservations: any[] = [];

  getReservations(): any[] {
    return this.reservations;
  }

  addReservation(reservationData: any) {
    this.reservations.push(reservationData);
  }

  removeReservation(index: number) {
    this.reservations.splice(index, 1);
  }
  
  clearReservations() {
    this.reservations = [];
  }
}
