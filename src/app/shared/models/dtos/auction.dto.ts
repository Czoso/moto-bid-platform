export interface Auction {
  userId: string;
  auctionId: number;
  title: string;
  car: Car;
  price: number;
  description: string;
  imageSrc: string;
}

export interface Car {
  productionYear: number;
  brand: string;
  model: string;
  engineCapacity: string;
  fuelType: string;
  mileage: number;
  location: string;
  bodyType: string;
}
