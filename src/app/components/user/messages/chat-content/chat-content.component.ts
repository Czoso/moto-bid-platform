import { Chat, User } from 'src/app/shared/models';
import { Component, Input, OnInit } from '@angular/core';
import { ChatService, DatabaseService, Message } from 'src/app/shared';
import { get, ref, set, update } from 'firebase/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  public userIndex = this.route.snapshot.params['userId'];
  public interlocutorIndex = this.route.snapshot.params['interlocutorId'];
  public inputValue: string = '';
  public currentChat?: Chat;
  private userChatIndex?: number;
  private interlocutorChatIndex?: number;
  private currentUser?: string;
  constructor(
    private chatService: ChatService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {}

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
      if (this.currentUser) {
        const message: Message = { user: this.currentUser, message: this.inputValue };
        if (this.userIndex) {
          usersDB.val()[this.userIndex].chats.forEach((singleChat: Chat, chatIndex: number) => {
            if (singleChat.interlocutor === this.currentChat?.interlocutor && this.currentChat) {
              this.userChatIndex = chatIndex;
            }
          });
        }
        usersDB
          .val()
          [this.interlocutorIndex].chats.forEach((singleChat: Chat, chatIndex: number) => {
            if (singleChat.interlocutor === this.currentUser) {
              this.interlocutorChatIndex = chatIndex;
            }
          });
        if (this.userChatIndex) {
          const previousChat = usersDB.val()[this.userIndex].chats[this.userChatIndex].conversation;
          if (usersDB.val()[this.userIndex].chats !== undefined) {
            if (this.userChatIndex!) {
              update(
                ref(
                  this.databaseService.getDatabase(),
                  `database/users/${this.userIndex}/chats/${this.userChatIndex}`
                ),
                {
                  conversation: [...previousChat, message],
                }
              );
              if (this.interlocutorChatIndex) {
                update(
                  ref(
                    this.databaseService.getDatabase(),
                    `database/users/${this.interlocutorIndex}/chats/${this.interlocutorChatIndex}`
                  ),
                  {
                    conversation: [...previousChat, message],
                  }
                );
              }
            }
          } else {
            if (this.userChatIndex) {
              set(
                ref(
                  this.databaseService.getDatabase(),
                  `database/users/${this.userIndex}/chats/${this.userChatIndex}`
                ),
                {
                  conversation: [message],
                }
              );
              if (this.interlocutorChatIndex) {
                set(
                  ref(
                    this.databaseService.getDatabase(),
                    `database/users/${this.interlocutorIndex}/chats/${this.interlocutorChatIndex}`
                  ),
                  {
                    conversation: [message],
                  }
                );
              }
            }
          }
        }
      }
    });
  }
}
