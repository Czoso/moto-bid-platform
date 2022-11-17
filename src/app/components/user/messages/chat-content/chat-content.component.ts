import { Chat } from 'src/app/shared/models';
import { Component, OnInit } from '@angular/core';
import { ChatService, DatabaseService, Message } from 'src/app/shared';
import { ref, set, update } from 'firebase/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  public userIndex = this.route.parent?.parent?.snapshot.params['userId'];
  public interlocutorIndex = this.route.snapshot.params['interlocutorId'];
  public inputValue: string = '';
  public currentChat?: Chat;
  private userChatIndex?: number;
  private interlocutorChatIndex?: number;
  private currentUser?: string;
  private usersDB?: Array<any>;
  constructor(
    private chatService: ChatService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUser = userId;
    });
    this.chatService.currentChat$.subscribe((clickedChat: Chat) => {
      this.currentChat = clickedChat;
    });
    this.databaseService.getData(`database/users`).then(usersDB => {
      this.usersDB = usersDB.val();
    });
  }
  public send(): void {
    if (this.usersDB !== undefined) {
      if (this.currentUser) {
        const message: Message = { user: this.currentUser, message: this.inputValue };
        if (this.userIndex) {
          this.usersDB[this.userIndex].chats.forEach((singleChat: Chat, chatIndex: number) => {
            if (singleChat.interlocutor === this.currentChat?.interlocutor && this.currentChat) {
              this.userChatIndex = chatIndex;
            }
          });
        }
        this.usersDB[this.interlocutorIndex].chats.forEach(
          (singleChat: Chat, chatIndex: number) => {
            if (singleChat.interlocutor === this.currentUser) {
              this.interlocutorChatIndex = chatIndex;
            }
          }
        );
        if (this.userChatIndex !== undefined) {
          const previousChat = this.usersDB[this.userIndex].chats[this.userChatIndex].conversation;
          if (this.usersDB[this.userIndex].chats !== undefined) {
            if (this.userChatIndex !== undefined) {
              update(
                ref(
                  this.databaseService.getDatabase(),
                  `database/users/${this.userIndex}/chats/${this.userChatIndex}`
                ),
                {
                  conversation: [...previousChat, message],
                }
              );
              if (this.interlocutorChatIndex !== undefined) {
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
            this.currentChat?.conversation.push(message);
          } else {
            if (this.userChatIndex !== undefined) {
              set(
                ref(
                  this.databaseService.getDatabase(),
                  `database/users/${this.userIndex}/chats/${this.userChatIndex}`
                ),
                {
                  conversation: [message],
                }
              );
              if (this.interlocutorChatIndex !== undefined) {
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
              this.currentChat?.conversation.push(message);
            }
          }
        }
      }
    }
    this.databaseService.getData(`database/users`).then(usersDB => {
      this.usersDB = usersDB.val();
    });
    this.inputValue = '';
  }
}
