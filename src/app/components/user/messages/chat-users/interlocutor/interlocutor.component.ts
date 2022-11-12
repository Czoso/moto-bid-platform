import { ChatService, DatabaseService } from 'src/app/shared';
import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/shared/models';

@Component({
  selector: 'app-interlocutor',
  templateUrl: './interlocutor.component.html',
  styleUrls: ['./interlocutor.component.scss'],
})
export class InterlocutorComponent implements OnInit {
  @Input() public interlocutor?: Chat;
  constructor(public chatService: ChatService) {}
  public ngOnInit(): void {
    console.log();
  }
}
