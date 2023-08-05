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
  //@Input() dataSource: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'nameReserva','actions'];
  dataSource :any[] = [];

  ngOnInit() {
    this.dataSource = this.reservaService.getReservations();
  }

  agregarElemento() {
    const newPosition = this.dataSource.length + 1;
    const newElement: PeriodicElement = {
      position: newPosition,
      name: 'Nuevo Elemento',
      nameReserva: 'nuevo',
      actions: null
    };
    this.dataSource.push(newElement);
  }

  eliminarElemento(index: number) {
    this.reservaService.removeReservation(index);
  }
  
}

