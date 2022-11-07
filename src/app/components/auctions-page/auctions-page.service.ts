import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuctionsPageService {
  constructor() {}

  public getAuctions(): any {
    return of([]);
  }
}
