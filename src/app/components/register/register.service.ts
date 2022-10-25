import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}
  public createUser(email: string, password: string): Promise<any> {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
    // .then(userCredential => {
    //   console.log(auth, email);
    //   // Signed in
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch(error => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
  }
}
