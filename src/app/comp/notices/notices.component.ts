import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../shared/service/notice.service';
import {ApiService} from '../../shared/service/api/api.service';
import {Notice} from '../../shared/model/notice';
import { ToastrService } from 'ngx-toastr';
import {FormControl } from '@angular/forms';


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

    onUpdate(f){
      this.apiNoticeList = [];
      this.apiService.getApiNotice(f)
      .subscribe(n => {
        n.articles.forEach(notice => {
          this.apiNoticeList.push(notice) ;
        })
      });
    }



   onSave(n:Notice){
    this.noticeService.saveNotice(n);
    this.toastr.success("correctamente","Noticia Guardada",{timeOut: 1200});
  }


  noticeControl = new FormControl();

  sources = [
    {
      name: 'Español',
      noticeSource: [
        { value: 'google-news-ar', viewValue: 'Google News(ar)' },
        { value: 'cnn-es', viewValue: 'CNN Español' },
        { value: 'el-mundo', viewValue: 'El mundo' },
        { value: 'la-nacion', viewValue: 'La Nacion' },
        { value: 'la-gaceta', viewValue: 'La Gaceta' }
      ]
    },
    {
      name: 'Ingles',
      noticeSource: [
      { value: 'the-washington-post', viewValue: 'The Washington Post' },
      { value: 'the-new-york-times', viewValue: 'The New York Times' },
        { value: 'hacker-news', viewValue: 'Hacker News ' },
        { value: 'engadget', viewValue: 'Engadget' },
        { value: 'espn', viewValue: 'ESPN' },
        { value: 'the-wall-street-journal', viewValue: 'The Wall Street Journal' },      
        { value: 'the-economist', viewValue: 'The Economist' },
        { value: 'the-guardian-uk', viewValue: 'The Guardian (UK)'}
        
      ]
    }
  ];
}

