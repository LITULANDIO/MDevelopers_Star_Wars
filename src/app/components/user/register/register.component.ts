import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  // Registro de usuario
onAddUser(){
  this.authService.registerUser(this.email, this.password)
    .then((res) =>{
      this.router.navigate(['login']);
    }).catch(err => console.log('err', err.message));
}
  
}
