import { Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <button (click)="showUsers()">Gestionar Usuarios</button>
      <button (click)="showReservations()">Gestionar Reservas</button>
      <button (click)="showHotels()">Gestionar Hoteles</button>
    </div>
    <div>
      <app-usuario *ngIf="showingUsers"></app-usuario>
      <app-reserva *ngIf="showingReservations"></app-reserva>
      <app-hotel *ngIf="showingHotels"></app-hotel>
    </div>
  `,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {



  showingUsers: boolean = false;
  showingReservations: boolean = false;
  showingHotels: boolean = false;


showReservations() {
  this.showingUsers = false;
  this.showingReservations = true;
  this.showingHotels = false;
}

showHotels() {
  this.showingUsers = false;
  this.showingReservations = false;
  this.showingHotels = true;
}
  showUsers() {
    this.showingUsers = true;
    this.showingReservations = false;
    this.showingHotels = false;
  }
  
}