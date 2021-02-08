import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/mySongs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }
  mySong = Songs;
  count = 0;

  ngOnInit() {
  }
  showData(index) {
    this.count = index;
  }
}
