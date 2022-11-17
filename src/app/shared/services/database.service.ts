import { User } from 'src/app/shared/models';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Database, get, getDatabase, ref } from 'firebase/database';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public currentUser$ = new ReplaySubject<string>(1);
  public currentUserIndex$ = new ReplaySubject<number>(1);
  private app: FirebaseApp = initializeApp(environment.firebase);
  private database: Database = getDatabase(this.app);

  constructor() {}
  public getDatabase(): Database {
    return this.database;
  }
  public setUser(user: string): void {
    this.currentUser$.next(user);

    get(ref(this.database, 'database/users')).then(usersDB => {
      usersDB.val().forEach((singleUser: User, userIndex: number) => {
        if (singleUser.userID === user) {
          this.currentUserIndex$.next(userIndex);
        }
      });
    });
  }
  public getData(reference: string): Promise<any> {
    return get(ref(this.database, reference));
  }
}
