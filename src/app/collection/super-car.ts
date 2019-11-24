export interface SuperCar {
  carImages: string[];
  carName: string,
  carCode: string,
  brandName: string,
  manufactureYear: number
  description: string,
  engineDetails: 
    {
      engineType: string,
      engineCC: number,
      horsePower: number,
      torque: number
    },
  maxSpeed: number,
  zeroToSixty: number,
  price: number
}
