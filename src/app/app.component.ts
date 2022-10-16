import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'moto-bid-platform';
  username = 'Paweł';

  changeNameToGuzik() {
    console.log('tak');

    this.username = 'Guzik';
  }
}
