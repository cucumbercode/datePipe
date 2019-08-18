import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datePipe';
  listData = [
    {
      title: 'Post 1',
      date: '2019-08-15T19:14:15+08:00',
    },
    {
      title: 'Post 2',
      date: '2019-08-18T19:14:15+08:00',
    },
    {
      title: 'Post 3',
      date: '2019-08-12T19:14:15+08:00',
    },
    {
      title: 'Post 4',
      date: '2019-08-18T19:14:15+08:00',
    },
    {
      title: 'Post 5',
      date: '2019-08-18T19:14:15+08:00',
    },
    {
      title: 'Post 6',
      date: '2019-08-18T19:14:15+08:00',
    }
  ];
}
