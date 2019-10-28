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
    private afAuth: AngularFireAuth,
  ) {}

  ngOnInit() {
    //this.getCurrentUser();
  }
  //Comprobar que el usuario a iniciado sesión

  // getCurrentUser() {
  //   this.authService.isAuth().subscribe(auth => {
  //     if (auth) {
  //       console.log("usuario SI logueado");
  //       this.isLogged = true;
  //     } else {
  //       console.log("usuario NO logueado");
  //       this.isLogged = false;
  //     }
  //   });
  // } Problemas con método subscribe

  // Cerrar sesión 
  onLogout() {
    console.log("cerrando session....");
    this.afAuth.auth.signOut();
  }
}
