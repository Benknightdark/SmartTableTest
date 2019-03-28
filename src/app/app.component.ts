import { Component, OnInit, ɵConsole } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  page: number = 1;
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    },
  };

  source: ServerDataSource;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10' });
    console.log(`取得當前Table資訊 ${this.source.getPaging()}`)
    this.source.onChanged().subscribe(data => {
      console.log(`Table資料來源已改變`)
      console.log(data)
    })
  }




  ngOnInit() { }
}
