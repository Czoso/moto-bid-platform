import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'moto-bid-platform';
  public username = 'Paweł';
  private name = 'costam';
  public ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyC7xCMoyTCeJVQ-ygD_QteDXXCGSzGPL6E',
      authDomain: 'autochill-72340.firebaseapp.com',
      databaseURL: 'https://autochill-72340-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'autochill-72340',
      storageBucket: 'autochill-72340.appspot.com',
      messagingSenderId: '987279436571',
      appId: '1:987279436571:web:d19f2f8474120aa9d801be',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
  public changeNameToGuzik(): void {
    console.log('tak');

    this.username = 'Guzik';
  }

  public someFunction(): void {
    console.log('hej');
  }
}
