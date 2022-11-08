import { DatabaseService } from 'src/app/shared';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { get, ref } from 'firebase/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  public currentUserId = '';
  public username = '';
  constructor(public router: Router, private databaseService: DatabaseService) {}

  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    });
    get(ref(this.databaseService.getDatabase(), `users/${this.currentUserId}/username`)).then(
      snapshot => {
        this.username = snapshot.val();
      }
    );
  }
  public ngOnDestroy(): void {
    this.databaseService.currentUser$.unsubscribe();
  }
}
