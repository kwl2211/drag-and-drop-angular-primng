import { Component } from '@angular/core';
import { Car } from './model/app-interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  availableCars: any;

  selectedCars: any;

  draggedCar: any;
  manageplanForm: FormGroup;

  constructor() {
    this.selectedCars = [];
    this.availableCars = [
      {
        vin: 'a1653d4d',
        brand: 'VW',
        year: 1998,
        color: 'White',
        price: 10000
      },
      {
        vin: 'ddeb9b10',
        brand: 'Mercedes',
        year: 1985,
        color: 'Green',
        price: 25000
      },
      {
        vin: 'd8ebe413',
        brand: 'Jaguar',
        year: 1979,
        color: 'Silver',
        price: 30000
      },
      {
        vin: 'aab227b7',
        brand: 'Audi',
        year: 1970,
        color: 'Black',
        price: 12000
      },
      {
        vin: '631f7412',
        brand: 'Volvo',
        year: 1992,
        color: 'Red',
        price: 15500
      },
      {
        vin: '7d2d22b0',
        brand: 'VW',
        year: 1993,
        color: 'Maroon',
        price: 40000
      }
    ];
  }

  dragStart(event, car) {
    this.draggedCar = car;
  }

  dropped(event, a, b) {
    if (this.draggedCar) {
      const draggedCarIndex = this.findIndex(this.draggedCar);
      this.selectedCars = [...this.selectedCars, this.draggedCar];
      this.availableCars = this.availableCars.filter((val, i) => i !== draggedCarIndex);
      this.availableCars.splice(b, 0, this.draggedCar);
      this.draggedCar = null;
    }
  }

  dragEnd(event) {
    this.draggedCar = null;
  }

  findIndex(car) {
    let index = -1;
    for (let i = 0; i < this.availableCars.length; i++) {
      if (car.vin === this.availableCars[i].vin) {
        index = i;
        break;
      }
    }
    return index;
  }

}
