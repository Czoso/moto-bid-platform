import { DatabaseService, User } from 'src/app/shared';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public currentUserId = '';
  public currentUserIndex: number = -1;
  constructor(private databaseService: DatabaseService) {}
  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe(userId => {
      this.currentUserId = userId;
    });
    this.databaseService.currentUserIndex$.subscribe(userId => {
      this.currentUserIndex = userId;
    });
  }
}
