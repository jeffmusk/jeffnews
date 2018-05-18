import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../shared/service/notice.service';
import {ApiService} from '../../shared/service/api/api.service';
import {Notice} from '../../shared/model/notice';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']

})
export class NoticesComponent implements OnInit {
	noticeList:Notice[];
  apiNoticeList;
  lastNotice;
  loanding:boolean;

  constructor(private noticeService:NoticeService ,
    private toastr:ToastrService,
    private apiService:ApiService) { }

  ngOnInit() {
    this.noticeService.getNotice();

    this.apiNoticeList = [];

    this.apiService.getApiNotice()
      .subscribe(n => {
        n.articles.forEach(notice => {
          this.apiNoticeList.push(notice) ;
        })
      });
      setTimeout(()=> {
      	this.loanding = true; 
      },1500);
	   
  }

   onSave(n:Notice){
    this.noticeService.saveNotice(n);
    this.toastr.success("correctamente","Noticia Guardada",{timeOut: 1200});
  }

}
