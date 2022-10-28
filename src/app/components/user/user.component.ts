import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public toggle: boolean = true;
  constructor(public router: Router) {}

  public ngOnInit(): void {
    console.log('init');
  }
}
