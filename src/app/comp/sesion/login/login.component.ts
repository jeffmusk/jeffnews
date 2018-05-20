import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/service/auth/login.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email:string;
	password:string;
  constructor(private login:LoginService, private route:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
  	this.login.loginUser(this.email,this.password)
  	.then( (res) => {
  		this.route.navigate(['/notices']);
  	}).catch((err) => {
  		console.log(err);
  		this.route.navigate(['/login']);
  	 })
  }

  

}
