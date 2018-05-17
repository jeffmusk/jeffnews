import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../../shared/service/notice.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  constructor(private noticeService:NoticeService,
    private toastr:ToastrService
    ) { }
  
  ngOnInit() {
  }

  onSubmit(noticeForm:NgForm){
    /*
    if (noticeForm.value.$key == null) { 
      this.noticeService.createNotice(noticeForm.value);
    } else {
      this.noticeService.updateNotice(noticeForm.value);
    }
    this.resetForm(noticeForm);*/
    this.toastr.success("Noticia creada");
  }

  resetForm(noticeForm?:NgForm){
    noticeForm.reset();
    this.noticeService.selectedNotice = {
      $key: null,
      titular: "",
      contenido:"",
      fecha: "" ,
      img: "" ,
      favoritos: false
    }
  }
}
