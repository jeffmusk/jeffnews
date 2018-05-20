import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/service/auth/login.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isLogin:boolean;
	nameUser:string;
	emailUser:string;

  constructor(private login:LoginService, private route:Router) { }

  ngOnInit() {
  	this.login.currentUser().subscribe( auth => {
  		if (auth) {
  			this.isLogin = true;
  			this.nameUser = auth.displayName ;
  			this.emailUser =auth.email ;
  		}else {
  			this.isLogin = false;
  		}


  	});
  }

  onLogOut(){
  	this.login.logOut();
  	alert("Cerro Sesion");
  }

}
