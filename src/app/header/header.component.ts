import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/cuilin';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  student: Student={ sNumber: 991456394, sName: 'Lin Cui',slogin: 'cuil',sCampus: 'Trafalgar', sTitle:'Assignment3'};
  constructor() { }

  ngOnInit() {
  }

}
