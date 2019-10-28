import { Injectable, ReflectiveInjector } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Método almacenar los datos en firebase
  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
  // Método para enviar los datos a firabse
  loginEmailUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  // Método para cerrar sesión
  signOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
    console.log("logout....");
  }

  // Método para saber si un usuario está logueado
  isAuth() {
    this.afAuth.authState.pipe(map(auth => auth));
  }
}
