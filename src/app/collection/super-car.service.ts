import { Injectable } from '@angular/core';
import { SuperCar } from './super-car';

@Injectable({
  providedIn: 'root'
})
export class SuperCarService {

  superCars: SuperCar[] = [
    {
      carImage: 'https://images.unsplash.com/photo-1555160329-6a0ccf5c91f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      carName: 'Ford Mustang GT',
      carCode: 'ford-mustang-gt',
      brandName: 'Ford',
      manufactureYear: 2018,
      description: 'Ford Mustang GT has a V8 5.6 Litre engine produces 568 horse power ',
      engineDetails: 
        {
          engineType: 'V8',
          engineCC: 5.6,
          horsePower: 568,
          torque: 550
        },
      price: 80000
    },
    {
      carImage: 'https://images.unsplash.com/photo-1542228261-89eed3d81d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      carName: 'Nissan GTR',
      carCode: 'nissan-gtr',
      brandName: 'Nissan',
      manufactureYear: 2016,
      description: 'Nissan GTR has a V8 5.6 Litre engine produces 568 horse power ',
      engineDetails: 
        {
          engineType: 'V6',
          engineCC: 6.2,
          horsePower: 705,
          torque: 665
        },
      price: 50000
    },
    {
      carImage: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      carName: 'Lamborghini Huracan',
      carCode: 'lamborghini-huracan',
      brandName: 'Lamborghini',
      manufactureYear: 2017,
      description: 'Ford Mustang GT has a V12 7 Litre engine produces 780 horse power ',
      engineDetails: 
        {
          engineType: 'V12',
          engineCC: 7,
          horsePower: 750,
          torque: 765
        },
      price: 600000
    },
    {
      carImage: 'https://images.unsplash.com/photo-1564694457220-0efef1a70d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
      carName: 'Porche 911 GT3 RS',
      carCode: 'porche-911-gt3-rs',
      brandName: 'Porche',
      manufactureYear: 2015,
      description: 'Porche 911 GT3 RS has a V6 4 Litre engine produces 580 horse power',
      engineDetails: 
        {
          engineType: 'V6',
          engineCC: 4.5,
          horsePower: 580,
          torque: 520
        },
      price: 350000
    }
  ];

  constructor() { }

  getSuperCars() {
    return this.superCars.slice();
  }

  getSuperByCode(code: string) {
    return this.superCars.find((car) => {
      if (car.carCode === code) {
        return car;
      }
    });
  }
}
