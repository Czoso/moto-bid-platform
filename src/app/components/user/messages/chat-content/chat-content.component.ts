import { Chat, User } from 'src/app/shared/models';
import { Component, Input, OnInit } from '@angular/core';
import { ChatService, DatabaseService, Message } from 'src/app/shared';
import { get, ref, set, update } from 'firebase/database';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  @Input() public userIndex!: number;
  public inputValue: string = '';
  public currentChat!: Chat;
  public interlocutorIndex!: number;
  private currentUser!: string;
  constructor(private chatService: ChatService, private databaseService: DatabaseService) {}

  public ngOnInit(): void {
    this.chatService.currentChat$.subscribe((clickedChat: Chat) => {
      this.currentChat = clickedChat;
    });
    this.databaseService.currentUser$.subscribe((currentUserId: string) => {
      this.currentUser = currentUserId;
    });
  }
  public send(): void {
    this.databaseService.getData(`database/users`).then(usersDB => {
      const message: Message = { user: this.currentUser, message: this.inputValue };
      let userChatIndex: number;
      let interlocutorChatIndex: number;
      usersDB.val().forEach((singleUser: User, singleUserIndex: number) => {
        if (singleUser.userID === this.currentChat.interlocutor) {
          this.interlocutorIndex = singleUserIndex;
        }
      });
      usersDB.val()[this.userIndex!].chats.forEach((singleChat: Chat, chatIndex: number) => {
        if (singleChat.interlocutor === this.currentChat.interlocutor) {
          userChatIndex = chatIndex;
        }
      });
      usersDB
        .val()
        [this.interlocutorIndex!].chats.forEach((singleChat: Chat, chatIndex: number) => {
          if (singleChat.interlocutor === this.currentUser) {
            interlocutorChatIndex = chatIndex;
          }
        });
      const previousChat = usersDB.val()[this.userIndex!].chats[userChatIndex!].conversation;

      if (usersDB.val()[this.userIndex!].chats !== undefined) {
        update(
          ref(
            this.databaseService.getDatabase(),
            `database/users/${this.userIndex!}/chats/${userChatIndex!}`
          ),
          {
            conversation: [...previousChat, message],
          }
        );
        update(
          ref(
            this.databaseService.getDatabase(),
            `database/users/${this.interlocutorIndex!}/chats/${interlocutorChatIndex!}`
          ),
          {
            conversation: [...previousChat, message],
          }
        );
      } else {
        set(
          ref(
            this.databaseService.getDatabase(),
            `database/users/${this.userIndex!}/chats/${userChatIndex!}`
          ),
          {
            conversation: [message],
          }
        );
        set(
          ref(
            this.databaseService.getDatabase(),
            `database/users/${this.interlocutorIndex!}/chats/${interlocutorChatIndex!}`
          ),
          {
            conversation: [message],
          }
        );
      }
    });
  }
}
