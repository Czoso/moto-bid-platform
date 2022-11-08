import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auction } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class AuctionsPageService {
  constructor() {}

  public getAuctions(): Promise<Auction[] | undefined> {
    return of([
      {
        userId: 'userId1',
        title: 'BMW E36 1.8 Benzyna',
        car: {
          productionYear: 1997,
          brand: 'BMW',
          model: 'E36',
          engineCapacity: '1.8',
          fuelType: 'petrol',
          mileage: 150000,
          location: 'Świemino',
          bodyType: 'coupe',
        },
        price: 2000,
        description: 'Najlepszy samochód, okazja!!!',
        imageSrc: 'https://a.allegroimg.com/original/11418b/39340d32458fb28ad6e064c01109',
      },
      {
        userId: 'userId2',
        title: 'BMW E90 2.5 Diesel',
        car: {
          productionYear: 2007,
          brand: 'BMW',
          model: 'E90',
          engineCapacity: '2.5',
          fuelType: 'diesel',
          mileage: 90000,
          location: 'Koszalin',
          bodyType: 'sedan',
        },
        price: 70000,
        description: 'Najlepszy samochód, okazja!!!',
        imageSrc: 'https://www.wyborkierowcow.pl/wp-content/uploads/2021/05/BMW-serii-3-E90-3.jpg',
      },
    ]).toPromise();
  }
}
