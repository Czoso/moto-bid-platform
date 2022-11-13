import { Message } from './../../../../shared/models/dtos/user.dto';
import { Chat } from 'src/app/shared/models';
import { ChatService } from './../../../../shared/services/chat.service';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared';
import { get, ref, update } from 'firebase/database';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  public inputValue: string = '';
  public currentChat!: Chat;
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
    get(ref(this.databaseService.getDatabase(), `users`)).then(users => {
      console.log(users.val());
    });
  }
}
