import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(public authService: AuthService) { 

  }

  ngOnInit() {
  }

  onLogout(){
    console.log('cerrando session....')
    this.authService.logoutUser();
    
  }
  

}