import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'moto-bid-platform';
  public username = 'Paweł';
  private name = 'costam';

  public changeNameToGuzik(): void {
    console.log('tak');

    this.username = 'Guzik';
  }
}
