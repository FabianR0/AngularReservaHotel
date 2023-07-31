import { Component, ViewChild } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { MatStepper } from '@angular/material/stepper';
import { ServiceReservaService } from 'src/app/servicesReserva/serReserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent {

  constructor(private _formBuilder: FormBuilder,private http: HttpClient,private reservaService: ServiceReservaService) { }

  @ViewChild('stepper') stepper!: MatStepper;

  reservations: any[] = [];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  agregarElememto(reservationData: any){
    this.reservaService.addReservation(this.reservaService)
  }

  reset() {
    // Restablecer el primer formulario
    this.firstFormGroup.reset();
    this.firstFormGroup.markAsPristine();
    this.firstFormGroup.markAsUntouched();

    // Restablecer el segundo formulario
    this.secondFormGroup.reset();
    this.secondFormGroup.markAsPristine();
    this.secondFormGroup.markAsUntouched();

    this.stepper.reset();

    const reservationData = {
      position: this.reservations.length + 1,
      name: this.firstFormGroup.value.firstCtrl
    };

    this.reservations.push(reservationData);
    this.reservaService.addReservation(reservationData);
  }
  

  /*private url = 'http://localhost:8080/reservas';
  crearReserva(reserva: Reserva) {
    return this.http.post<Reserva>(this.url, reserva);
  }

  actualizarReserva(id: number, reserva: Reserva) {
    return this.http.put<Reserva>(`${this.url}/${id}`, reserva);
  }

  obtenerReserva(id: number) {
    return this.http.get<Reserva>(`${this.url}/${id}`);
  }

  eliminarReserva(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }*/

}
