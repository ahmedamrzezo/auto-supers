export interface SuperCar {
  carImage: string;
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
  price: number
}
