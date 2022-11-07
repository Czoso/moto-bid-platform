import { DatabaseService } from 'src/app/shared';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [DatabaseService],
})
export class MenuComponent implements OnInit, OnDestroy {
  public currentUser: String = '';
  constructor(private databaseService: DatabaseService) {}
  public ngOnInit(): void {
    this.databaseService.currentUser.subscribe((user: String) => {
      this.currentUser = user;
    });
  }
  public log(): void {
    console.log(this.currentUser);
  }
  public ngOnDestroy(): void {
    this.databaseService.currentUser.unsubscribe();
  }
}
