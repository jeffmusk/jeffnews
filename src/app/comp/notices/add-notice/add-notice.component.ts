import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../../shared/service/notice.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Notice} from '../../../shared/model/notice';
import {ReversePipe} from 'ngx-pipes';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
saveNoticesList:Notice[];
loanding:boolean;

  constructor(private noticeService:NoticeService,
    private toastr:ToastrService
    ) { }
  
  ngOnInit() {
    this.loanding = true; 
    this.noticeService.getNotice()
      .snapshotChanges()
      .subscribe(notice => {
        this.saveNoticesList = [];
        notice.forEach(notice => {
          var n = notice.payload.toJSON();
          n["$key"] = notice.key;
          this.saveNoticesList.push(n as Notice);
          this.loanding = false;
        })
      });
  }

  onDeleteNotice(n){
    if (confirm("¿Desea eliminar la noticia?")) {
      this.noticeService.deleteNotice(n); 
      this.toastr.warning("Notica Eliminada");
    }
  }
}
