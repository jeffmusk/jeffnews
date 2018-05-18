import { Injectable } from '@angular/core';
import {Notice} from '../model/notice';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {
	noticeList:AngularFireList<any>;
	selectedNotice:Notice = new Notice();

  constructor(private firebase:AngularFireDatabase) {
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

   updateNotice(notice:Notice){
      /*
   	this.noticeList.update(notice.$key,{
   		author:n.author,
         title:n.title,
         description:n.description,
         url:n.url,
         urlToImage:n.urlToImage,
         publishedAt:n.publishedAt
   	});*/
   }

   deleteNotice($key:string){
   	this.noticeList.remove($key);
   }

}
