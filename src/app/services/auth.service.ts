import { Injectable, ReflectiveInjector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fAuth: AngularFireAuth) { }

  registerUser(email: string, password: string){
    return new Promise((resolve, reject) =>{
      this.fAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });

  }

  loginEmailUser(email: string, password: string){
      return new Promise((resolve, reject)=>{
        this.fAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
      });
  }

  logoutUser(){
    return this.fAuth.auth.signOut();
  }

  isAuth(){
    this.fAuth.authState.pipe(map(auth => auth));
  }
}
