import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GirlGroup } from 'src/app/models/GirlGroup';
import { IdolsApiService } from 'src/app/share/idols-api.service';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
  group$: Observable<GirlGroup>;

  constructor(
    private route: ActivatedRoute,
    private service: IdolsApiService,
  ) { }

  ngOnInit() {
    this.getIdols();
  }

  getIdols() {
    this.group$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getIdols(params.get('group')))
    );

    // const group = this.route.snapshot.paramMap.get('group');
    // this.service.getIdols(group)
    // .subscribe(
    //   girlGroup => this.girlGroup = girlGroup
    // );
  }
}
