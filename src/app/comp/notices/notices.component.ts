import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../shared/service/notice.service';
import {Notice} from '../../shared/model/notice';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
	noticeList:Notice[];

  constructor(private noticeService:NoticeService) { }

  ngOnInit() {
  	var x = this.noticeService.getNotice();

    x.snapshotChanges()
    .subscribe(item => {
      this.noticeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.noticeList.push(y as Notice);
      });
    });
  }

}
