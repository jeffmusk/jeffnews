import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoticesComponent} from './comp/notices/notices.component';
import {AddNoticeComponent} from './comp/notices/add-notice/add-notice.component';
import {Error404Component} from './comp/error404/error404.component';
import {LoginComponent} from './comp/sesion/login/login.component';
import {RegistrationComponent} from './comp/sesion/registration/registration.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {CanActivate} from "@angular/router";

const routes: Routes = [
	{	
		path: "",
		component: NoticesComponent	
	},
	{
		path: "notices",
		component: NoticesComponent
	},
	{
		path:"guardadas",
		component: AddNoticeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "registration",
		component: RegistrationComponent
	},
	{
		path: "**",
		redirectTo: "404"
	},
	{
		path: "404",
		component: Error404Component
	}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
