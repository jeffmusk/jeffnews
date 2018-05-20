import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/service/auth/login.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	email:string;
	password:string;
  constructor(private login:LoginService, private route:Router) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
  	this.login.registerUser(this.email,this.password)
  	.then((res) => {
  		this.route.navigate(['/notices']);
  	}).catch( err => {
  		console.log(err);
  	})

  }

}
