import { Chat } from 'src/app/shared/models';
import { ChatService } from './../../../../shared/services/chat.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  public currentChat?: Chat;
  constructor(private formBuilder: FormBuilder, private chatService: ChatService) {}

  public ngOnInit(): void {
    this.createForm();
    this.chatService.currentChat$.subscribe((clickedChat: Chat) => {
      this.currentChat = clickedChat;
    });
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
  }
}
