import { Component, OnInit } from '@angular/core';

import { GirlGroup } from 'src/app/models/GirlGroup';
import { IdolsApiService } from 'src/app/share/idols-api.service';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
  girlGroup: GirlGroup;

  constructor(private idolsService: IdolsApiService) { }

  ngOnInit() {
    this.getIdols();
  }

  getIdols() {
    this.idolsService.getIdols('blackpink')
    .subscribe(
      girlGroup => this.girlGroup = girlGroup
    );
  }
}
