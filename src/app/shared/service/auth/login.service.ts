import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(public ngAuth:AngularFireAuth) { }

  registerUser(email:string,pass:string){
  	return new Promise((resolve,reject) => {
  		this.ngAuth.auth.createUserWithEmailAndPassword(email,pass)
  		.then( userData => resolve(userData), err => reject(err)	) 
  	})
  }

  loginUser(email:string,pass:string){
  	return new Promise((resolve,reject) => {
  		this.ngAuth.auth.signInWithEmailAndPassword(email,pass)
  		.then( userData => resolve(userData), err => reject(err)	) 
  	})
  }

  currentUser(){
  	return this.ngAuth.authState.map(auth => auth);
  }

  logOut(){
  	return this.ngAuth.auth.signOut();
  }
}
