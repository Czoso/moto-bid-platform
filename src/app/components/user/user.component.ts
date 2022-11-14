import { Chat } from 'src/app/shared/models/dtos/user.dto';
import { DatabaseService, User, Message } from 'src/app/shared';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { get, ref, set, update } from 'firebase/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public currentUserIndex!: number;
  public currentUserId = '';
  public username = '';
  constructor(public router: Router, private databaseService: DatabaseService) {}

  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    });

    this.databaseService.getData(`database/users`).then(usersDB => {
      console.log(usersDB.val());
      usersDB.val().forEach((singleUser: User) => {
        if (singleUser.userID === this.currentUserId) {
          this.username = singleUser.username;
        }
      });
      usersDB.val().forEach((singleUser: User, userIndex: number) => {
        if (singleUser.userID === this.currentUserId) {
          this.currentUserIndex = userIndex;
        }
      });
    });
  }
  public generateData(): void {
    const firstMessage: Message = {
      user: this.currentUserId,
      message: 'lamus',
    };
    const secondMessage: Message = {
      user: 'JrYjd1kNp4YQVU3hY1wzJxpmxCS2',
      message: 'pedał',
    };
    const firstChat: Chat = {
      interlocutor: 'JrYjd1kNp4YQVU3hY1wzJxpmxCS2',
      username: 'siepka',
      conversation: [firstMessage, secondMessage],
    };
    console.log(this.currentUserIndex);
    update(ref(this.databaseService.getDatabase(), `database/users/${this.currentUserIndex}`), {
      chats: firstChat,
    });
    console.log('generated');
  }
}
