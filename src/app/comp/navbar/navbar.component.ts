import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/service/auth/login.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public isLogin:boolean;
	nameUser:string;
  fotoUser:string;
	emailUser:string;

  constructor(private loginService:LoginService, private route:Router) { }

  ngOnInit() {
  	this.loginService.currentUser().subscribe( auth => {
  		if (auth) {
  			this.isLogin = true;
  			this.nameUser = auth.displayName ;
  			this.emailUser =auth.email ;
        this.fotoUser = auth.photoURL;
        this.route.navigate(['/']);
  		}else {
  			this.isLogin = false;
  		}
  	});
  }

  onLogOut(){
    this.isLogin = false;
    this.nameUser = null;
    this.emailUser =null ;
    this.fotoUser = null;
  	this.loginService.logOut();
    this.route.navigate(['/']);
  }

}
