import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../shared/service/notice.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  constructor(private noticeService:NoticeService) { }

  ngOnInit() {
  }

}
