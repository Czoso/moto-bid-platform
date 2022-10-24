import { environment } from './../../environments/environment';
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
    const firebas = initializeApp(environment.firebase);
    console.log('firebas');
  }
  public changeNameToGuzik(): void {
    console.log('tak');

    this.username = 'Guzik';
  }

  public someFunction(): void {
    console.log('hej');
  }
}
