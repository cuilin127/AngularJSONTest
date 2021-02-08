import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/cuilin';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  student: Student={ sNumber: 991456394, sName: 'Lin Cui',slogin: 'cuil',sCampus: 'Trafalgar', sTitle:'Assignment3'};
  constructor() { }

  ngOnInit() {
  }

}
