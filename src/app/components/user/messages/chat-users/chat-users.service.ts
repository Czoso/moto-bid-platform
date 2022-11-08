import { Injectable } from '@angular/core';
import { Chat } from 'src/app/shared/models/dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class ChatUsersService {
  public conversations: Chat[] = [
    {
      interlocutor: 'PTPPVAFCAafYlXq8cDDTlPkqOnE3',
      username: 'Szymon',
      conversation: [
        { interlocutor: 'SBLXQSR1dQP6jrfX0LnKPMxu0y02', message: 'ty kurwo czarna' },
        { interlocutor: 'PTPPVAFCAafYlXq8cDDTlPkqOnE3', message: 'ty kurwo biała' },
      ],
    },
  ];

  constructor() {}
  public getConversation(): Chat[] {
    return this.conversations;
  }
}
