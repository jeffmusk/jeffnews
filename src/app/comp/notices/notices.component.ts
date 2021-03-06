import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../shared/service/notice.service';
import {ApiService} from '../../shared/service/api/api.service';
import {Notice} from '../../shared/model/notice';
import { ToastrService } from 'ngx-toastr';
import {FormControl } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoginService} from '../../shared/service/auth/login.service';

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
  currentSource:string;
  isLogin:boolean;

  constructor(private noticeService:NoticeService ,
    private toastr:ToastrService,
    private apiService:ApiService,
    private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.currentUser().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      }else {
        this.isLogin = false;
      }
    });

    this.loanding = true; 
    this.noticeService.getNotice();
    this.apiNoticeList = [];
    this.apiService.getApiNotice()
      .subscribe(n => {
        n.articles.forEach(notice => {
          this.apiNoticeList.push(notice) ;
      	  this.loanding = false;
        })
      });
      this.currentSource = "Google News(ar)";
  }

    onUpdate(f){
      this.apiNoticeList = [];
      this.apiService.getApiNotice(f.value)
      .subscribe(n => {
        n.articles.forEach(notice => {
          this.apiNoticeList.push(notice) ;
        })
      });
      
      this.currentSource = f.viewValue;
    }



   onSave(n:Notice){
     if (this.isLogin) { 
       this.noticeService.saveNotice(n);
       this.toastr.success("correctamente","Noticia Guardada",{timeOut: 1200});
     } else {
       this.toastr.warning("Inicie sesion para guardar noticias","",{timeOut: 6000, progressBar: true ,
         closeButton: true, positionClass:"toast-top-center" });
     }
    
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

