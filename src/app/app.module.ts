import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment'
//fire base
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { NoticesComponent } from './comp/notices/notices.component';
import { AddNoticeComponent } from './comp/notices/add-notice/add-notice.component';
import {NoticeService} from './shared/service/notice.service';
import {ApiService} from './shared/service/api/api.service';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './comp/error404/error404.component'; 
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RegistrationComponent } from './comp/sesion/registration/registration.component';
import { LoginComponent } from './comp/sesion/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoticesComponent,
    AddNoticeComponent,
    Error404Component,
    RegistrationComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgPipesModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [NoticeService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
