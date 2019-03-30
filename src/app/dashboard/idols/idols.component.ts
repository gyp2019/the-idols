import { Component, OnInit } from '@angular/core';

import { GirlGroup } from 'src/app/models/GirlGroup';
import { IIdol } from 'src/app/models/IIdol';
import { Idol } from 'src/app/models/Idol';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
  girlGroup: GirlGroup;

  constructor() { }

  ngOnInit() {
    this.girlGroup = this.seedGirlGroupData();
  }

  private seedGirlGroupData(): GirlGroup {
    let grilGroup: GirlGroup = new GirlGroup('레드벨벳', 'SM Entertainment');
    grilGroup.members = this.seedMembers();
    return grilGroup;
  }

  private seedMembers(): IIdol[] {
    const data = [
      { "name": "아이린", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1991-03-29", "height": 158, "imageUrl": "https://bit.ly/2U3OEji" },
      { "name": "슬기", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1994-02-10", "height": 161, "imageUrl": "https://bit.ly/2JRID4N" },
      { "name": "웬디", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1994-02-21", "height": 159, "imageUrl": "https://bit.ly/2WyWdv8" },
      { "name": "조이", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1996-09-03", "height": 167, "imageUrl": "https://bit.ly/2FJw5qC" },
      { "name": "예리", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1999-03-05", "height": 158, "imageUrl": "https://bit.ly/2JRfMNW" },
      { "name": "나연", "group": "트와이스", "company": "JYP Entertainment", "birth": "1995-09-22", "height": 163, "weight": 48, "imageUrl": "https://bit.ly/2I7rHF1" },
      { "name": "정연", "group": "트와이스", "company": "JYP Entertainment", "birth": "1996-11-01", "height": 167, "weight": 49, "imageUrl": "https://bit.ly/2U3qzcB" },
      { "name": "모모", "group": "트와이스", "company": "JYP Entertainment", "birth": "1996-11-09", "height": 162, "weight": 48, "imageUrl": "https://bit.ly/2WvLTUM" },
      { "name": "사나", "group": "트와이스", "company": "JYP Entertainment", "birth": "1996-12-29", "height": 164, "weight": 45, "imageUrl": "https://bit.ly/2OC758J" },
      { "name": "지효", "group": "트와이스", "company": "JYP Entertainment", "birth": "1997-02-01", "height": 160, "weight": 47, "imageUrl": "https://bit.ly/2FCD0SH" },
      { "name": "미나", "group": "트와이스", "company": "JYP Entertainment", "birth": "1997-03-24", "height": 163, "weight": 46, "imageUrl": "https://bit.ly/2OyFlC5" },
      { "name": "다현", "group": "트와이스", "company": "JYP Entertainment", "birth": "1998-05-28", "height": 158, "weight": 49, "imageUrl": "https://bit.ly/2FL6aAg" },
      { "name": "채영", "group": "트와이스", "company": "JYP Entertainment", "birth": "1999-04-23", "height": 160, "weight": 47, "imageUrl": "https://bit.ly/2V7SG6G" },
      { "name": "쯔위", "group": "트와이스", "company": "JYP Entertainment", "birth": "1999-06-14", "height": 170, "weight": 49, "imageUrl": "https://bit.ly/2CJWQL9" },
      { "name": "지수", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1995-01-03", "height": 162, "weight": 44, "imageUrl": "https://bit.ly/2OyFmG9" },
      { "name": "제니", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1996-01-16", "height": 163, "imageUrl": "https://bit.ly/2OwY00Y" },
      { "name": "로제", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1997-02-11", "height": 168, "weight": 46, "imageUrl": "https://bit.ly/2CMv2Wn" },
      { "name": "리사", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1997-03-27", "height": 166.5, "weight": 44.7, "imageUrl": "https://bit.ly/2UjHO8B" }
    ];
    const members = data.map(record => {
      const idol: Idol = new Idol();
      idol.name = record.name;
      idol.birth = record.birth;
      idol.height = record.height;
      if (record.weight) {
        idol.weight = record.weight;
      }
      idol.imageUrl = record.imageUrl;
      return idol;
    })
    return members;
  }
}
