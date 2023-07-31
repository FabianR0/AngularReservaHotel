import { Component, OnInit } from '@angular/core';
import { ServiceReservaService } from 'src/app/servicesReserva/serReserva.service';

export interface PeriodicElement {
  name: string;
  position: number;
  nameReserva: string;
  actions: any; 
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen',nameReserva:'w', actions: null},
  {position: 2, name: 'Helium',nameReserva:'e', actions: null},
  {position: 3, name: 'Lithium',nameReserva:'r', actions: null},
  {position: 4, name: 'Beryllium',nameReserva:'t', actions: null},
  {position: 5, name: 'Boron',nameReserva:'y', actions: null},
  {position: 6, name: 'Carbon',nameReserva:'u', actions: null},
  {position: 7, name: 'Nitrogen',nameReserva:'i', actions: null},
  {position: 8, name: 'Oxygen',nameReserva:'o', actions: null},
  {position: 9, name: 'Fluorine',nameReserva:'p', actions: null},
  {position: 10, name: 'Neon',nameReserva:'s', actions: null},
];
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

