import { Component, OnInit } from '@angular/core';

import { idols } from '../../json/idols';
import { Idol } from 'src/app/models/Idol';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
  idols: Idol[];

  constructor() { }

  ngOnInit() {
    this.idols = idols;
  }

}
