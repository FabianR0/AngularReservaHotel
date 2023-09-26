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

  agregarElemento() {
    this.stepper.reset();
  }

  guardarReserva() {
    const reservationData = {
      position: this.reservations.length + 1,
      name: this.firstFormGroup.value.firstCtrl,
      nameReserva: this.secondFormGroup.value.secondCtrl,
    };

    this.reservations.push(reservationData);
    this.reservaService.addReservation(reservationData);

    this.stepper.reset();
  }

}
