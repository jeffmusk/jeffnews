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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoticesComponent,
    AddNoticeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
