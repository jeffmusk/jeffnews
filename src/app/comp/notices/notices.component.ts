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
  loanding:number;
  constructor(public noticeService:NoticeService ,
    private toastr:ToastrService,
    private apiService:ApiService) { }

  ngOnInit() {
    this.loanding = 0; 
    this.noticeService.getNotice();

    this.apiNoticeList = [];
    this.apiService.getApiNotice()
      .subscribe(n => {
        n.articles.forEach(notice => {
          this.apiNoticeList.push(notice) ;
        })
      });
      console.log(this.loanding);

      f

  }
  
  onSave(n:Notice){
    this.noticeService.saveNotice(n);
    this.toastr.warning("Guardada");
  }
/*
  onEdit(n:Notice){
    this.noticeService.selectedNotice = Object.assign({},n) ;

  }

  onDelete($key){
    if( confirm("Esta seguro de querer eliminar esta noticia") == true){
      this.noticeService.deleteNotice($key)
      this.toastr.warning("Eliminado")
    }
  }
*/
}
