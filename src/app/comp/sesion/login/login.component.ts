import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/service/auth/login.service';
import {Router} from '@angular/router' 
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nameUser:string;
	email:string;
	password:string;
  constructor(private loginService:LoginService, private route:Router ,
    public flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
  	this.loginService.loginUser(this.email,this.password)
  	.then( (res) => {
      this.flashMessages.show("Inicio de sesion  exitoso" , {
        cssClass: 'alert-success' ,  timeout: 4000
      });
  		this.route.navigate(['/notices']);
  	}).catch((err) => {
  		console.log(err);
      this.flashMessages.show(err.message , {
        cssClass: 'alert-danger' ,  timeout: 4000
      });
  		this.route.navigate(['/login']);
  	 })
  }

  onClickGoogleLogin() {
    this.loginService.currentUser().subscribe( auth => {
      if (auth) {
        this.nameUser = auth.displayName ;
        this.flashMessages.show(`Bienvenido ${this.nameUser}.`, { cssClass: 'alert-success'
         ,timeout: 4000});
        this.route.navigate(['/notices'])
        }
    });

    this.loginService.loginGoogle()
      .then((res) => {
      }).catch( err => {
        this.flashMessages.show(err.message, {cssClass: 'alert-danger'
          ,timeout: 6000});
      })
  }

  onClickFacebookLogin() {
    this.flashMessages.show("Estamos trabajando en ello", { cssClass: 'alert-success'
         ,timeout: 4000});

      }


}
