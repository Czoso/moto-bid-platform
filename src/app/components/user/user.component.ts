import { DatabaseService, User } from 'src/app/shared';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { get, ref } from 'firebase/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public currentUserId = '';
  public username = '';
  constructor(public router: Router, private databaseService: DatabaseService) {}

  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    });
    get(ref(this.databaseService.getDatabase(), `database/users`)).then(usersDB => {
      usersDB.val().forEach((singleUser: User) => {
        if (singleUser.userID === this.currentUserId) {
          this.username = singleUser.username;
        }
      });
    });
  }
}
