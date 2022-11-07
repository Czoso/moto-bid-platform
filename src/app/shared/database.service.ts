import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Database, getDatabase } from 'firebase/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public currentUser = new Subject<String>();
  private app: FirebaseApp = initializeApp(environment.firebase);
  private database: Database = getDatabase(this.app);

  constructor() {}
  public getDatabase(): Database {
    return this.database;
  }
  public setUser(user: string): void {
    console.log(this.currentUser);
    this.currentUser.next(user);
    console.log(this.currentUser);
  }
}
