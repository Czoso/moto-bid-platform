import { ChatUsersService } from './chat-users.service';
import { DatabaseService } from 'src/app/shared';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/shared/models/dtos/user.dto';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.scss'],
})
export class ChatUsersComponent implements OnInit {
  public conversations?: Chat[];
  constructor(private chatUsersService: ChatUsersService) {}

  public ngOnInit(): void {
    this.conversations = this.chatUsersService.getConversation();
  }
}
