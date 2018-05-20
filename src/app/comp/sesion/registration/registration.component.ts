import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/service/auth/login.service';
import {Router} from '@angular/router' 
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	email:string;
	password:string;
  constructor(private login:LoginService, private route:Router,
    public flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
  	this.login.registerUser(this.email,this.password)
  	.then((res) => {
      this.flashMessages.show("Registro exitoso" , {
        cssClass: 'alert-success' ,  timeout: 4000
      });
  		this.route.navigate(['/notices']);
  	}).catch( err => {
      this.flashMessages.show(err.message , {
        cssClass: 'alert-danger' ,  timeout: 4000
      });
  		console.log(err);
  	})

  }
}
