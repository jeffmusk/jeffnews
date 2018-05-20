import { Injectable } from '@angular/core';
import {Notice} from '../model/notice';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {LoginService} from '../../shared/service/auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
	noticeList:AngularFireList<any>;
	selectedNotice:Notice = new Notice();

  constructor(private firebase:AngularFireDatabase,
    private login:LoginService) {
   }

   ngOnInit() {

  }
    getNotice(){
      this.noticeList = this.firebase.list("notice");
      return this.noticeList;
   }
   
   saveNotice(n:Notice){
      this.noticeList.push({
         author:n.author,
         title:n.title,
         description:n.description,
         url:n.url,
         urlToImage:n.urlToImage,
         publishedAt:n.publishedAt
      });
   }

   deleteNotice($key:string){
   	this.noticeList.remove($key);
   }

}
