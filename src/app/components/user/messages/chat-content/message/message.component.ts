import { Component, Input, OnInit } from '@angular/core';
import { Message, DatabaseService } from 'src/app/shared';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() public message?: Message;
  public currentUserId = '';
  constructor(public databaseService: DatabaseService) {}

  public ngOnInit(): void {
    console.log();
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    });
  }
  public userId(): void {
    console.log(this.currentUserId);
  }
}
