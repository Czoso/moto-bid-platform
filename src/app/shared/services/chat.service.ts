import { Chat } from 'src/app/shared/models';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public currentChat$ = new ReplaySubject<Chat>(1);

  constructor() {}
  public setChat(chat: Chat): void {
    this.currentChat$.next(chat);
  }
}
