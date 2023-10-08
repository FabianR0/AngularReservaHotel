import { Component } from '@angular/core';
import { Hotel } from 'src/interface/Hotel';
import { ServiceHotelService } from 'src/app/servicesHotel/serhotel.service';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  hotel: Hotel | undefined;
  hoteles: Hotel[]=[];
  constructor(private servicesHotelService  : ServiceHotelService) {
    this.firstNameAutofilled = true;
    this.lastNameAutofilled = true;
  }

  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;

  crearHotel(){
    if (this.hotel) { 
      this.servicesHotelService.createHotel(this.hotel).subscribe(
        () => {
          console.log('Hotel creado con éxito');
          this.obtenerTodosLosHoteles();
        },
        error => {
          console.error('Error al crear el hotel', error);
        }
      );
      }  
  }
  obtenerHotelPorId(id:number){
    this.servicesHotelService.obtenerHotelPorId(id).subscribe(
      data => {
        this.hotel = data;
      },
      error => {
        console.error('Error al obtener el hotel', error);
      }
    );
  }
  
  obtenerTodosLosHoteles(){
    this.servicesHotelService.obtenerTodosLosHoteles().subscribe(
      data => {
        this.hoteles = data;
      },
      error => {
        console.error('Error al obtener los hoteles', error );
      }
    );
  }
  
  actualizarHotel(id: number) {
    if (this.hotel) { 
      this.servicesHotelService.updateHotel(id, this.hotel).subscribe(
        () => {
          console.log('Hotel actualizado con éxito');
          this.obtenerTodosLosHoteles();
        },
        error => {
          console.error('Error al actualizar el hotel', error);
        }
      );
      }
  }
 
  eliminarHotel(id: number) {
    this.servicesHotelService.deleteHotel(id).subscribe(
      () => {
        console.log('Hotel eliminado con éxito');
        this.obtenerTodosLosHoteles();
      },
      error => {
        console.error('Error al eliminar el hotel' ,error);
      }
    ); 
  } 
}
