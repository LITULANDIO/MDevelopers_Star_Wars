import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean;
  public useremail: string;

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  //Comprobar que el usuario a iniciado sesión

  getCurrentUser() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user != null) {
        this.isLogged = true;
        console.log("usuario loggeado");
      } else {
        this.isLogged = false;
        console.log('usuario NO loguer')
      }
    });
  }

  // Cerrar sesión
  onLogout() {
    this.authService.logout();
  }
}
