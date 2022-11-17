import { ActivatedRoute } from '@angular/router';
import { DatabaseService, User } from 'src/app/shared';
import { Component, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/shared/models/dtos/user.dto';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  public currentUserIndex = this.route.parent?.snapshot.params['userId'];
  public conversations?: Chat[];
  public interlocutorIndex?: number;
  private usersDB?: User[];
  constructor(private databaseService: DatabaseService, public route: ActivatedRoute) {}
  public ngOnInit(): void {
    this.databaseService.getData(`database/users`).then(usersDB => {
      this.usersDB = usersDB.val();
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
