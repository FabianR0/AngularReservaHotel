import { Component, OnInit } from '@angular/core';
import { ServiceReservaService } from 'src/app/servicesReserva/serReserva.service';

export interface PeriodicElement {
  name: string;
  position: number;
  nameReserva: string;
  actions: any; 
}


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit{

  constructor(private reservaService: ServiceReservaService) {}
  
  displayedColumns: string[] = ['position', 'name', 'nameReserva','actions'];
  dataSource :any[] = [];

  displayedColumns2: string[] = ['position', 'name', 'nameReserva','actions'];
  dataSource2 :any[] = [];
  ngOnInit() {
    this.dataSource = this.reservaService.getReservations();
  }

  agregarElemento(): void {
    const urlExterna = 'Reserva'; 
    window.location.href = urlExterna;
  }

  eliminarElemento(index: number) {
    this.reservaService.removeReservation(index);
  }
  
}

