import { DatabaseService, User } from 'src/app/shared';
import { Component, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/shared/models/dtos/user.dto';
import { single } from 'rxjs';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  @Output() public currentUserIndex!: any;
  public conversations?: Chat[];
  private currentUserId: string = '';
  constructor(private databaseService: DatabaseService) {}
  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    });
    this.databaseService.getData(`database/users`).then(usersDB => {
      usersDB.val().forEach((singleUser: User, userIndex: number) => {
        if (singleUser.userID === this.currentUserId) {
          this.currentUserIndex = userIndex;
        }
      });
      if (usersDB.val()[this.currentUserIndex].chats !== undefined) {
        this.conversations = usersDB.val()[this.currentUserIndex].chats;
      }
    });
  }
  public getIndex(): void {}
}
