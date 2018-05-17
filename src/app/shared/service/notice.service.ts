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

   createNotice(notice:Notice){
   	this.noticeList.push({
   		titular:notice.titular,
			contenido:notice.contenido,
			fecha:notice.fecha,
			img:notice.img,
			favoritos:notice.favoritos
   	});
   }

   updateNotice(notice:Notice){
   	this.noticeList.update(notice.$key,{
   		titular:notice.titular,
			contenido:notice.contenido,
			fecha:notice.fecha,
			img:notice.img,
			favoritos:notice.favoritos
   	});

   }

   deleteNotice($key:string){
   	this.noticeList.remove($key);
   }
}
