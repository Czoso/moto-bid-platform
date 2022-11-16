import { DatabaseService, User } from 'src/app/shared';
import { Component, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/shared/models/dtos/user.dto';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  @Output() public currentUserIndex!: any;
  public conversations?: Chat[];
  public interlocutorIndex?: number;
  private currentUserId: string = '';
  private usersDB?: User[];
  constructor(private databaseService: DatabaseService) {}
  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    });
    this.databaseService.getData(`database/users`).then(usersDB => {
      this.usersDB = usersDB.val();
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
  public getIndex(interlocutor: string): number {
    if (this.usersDB) {
      this.usersDB.forEach((singleUser: User, singleUserIndex: number) => {
        if (interlocutor) {
          if (singleUser.userID === interlocutor) {
            this.interlocutorIndex = singleUserIndex;
          }
        }
      });
    }
    if (this.interlocutorIndex) {
      return this.interlocutorIndex;
    }
    return -1;
  }
}
