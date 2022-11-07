import { DatabaseService } from 'src/app/shared';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [DatabaseService],
})
export class MenuComponent implements OnInit, OnDestroy {
  public currentUserId = '';
  constructor(private databaseService: DatabaseService) {}
  public ngOnInit(): void {
    this.databaseService.currentUser.subscribe(userId => {
      this.currentUserId = userId;
      console.log(this.currentUserId);
    });
  }
  public log(): void {
    console.log(this.currentUserId);
  }
  public ngOnDestroy(): void {
    this.databaseService.currentUser.unsubscribe();
  }
}
