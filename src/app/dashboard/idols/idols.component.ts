import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GirlGroup } from 'src/app/models/GirlGroup';
import { IdolsApiService } from 'src/app/share/idols-api.service';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
  girGroup: GirlGroup;

  constructor(
    private route: ActivatedRoute,
    private service: IdolsApiService,
  ) { }

  ngOnInit() {
    this.getIdols();
  }

  getIdols() {
    const group = this.route.snapshot.paramMap.get('group');
    this.service.getGirlGroup(group)
      .subscribe(girGroup => this.girGroup = girGroup)
  }
}
