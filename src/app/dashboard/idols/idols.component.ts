import { Component, OnInit } from '@angular/core';

import { Idols } from 'src/app/models/idols';
import { Girl } from 'src/app/models/girl';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
  lastest_idols: Idols = new Idols();
  errorMessage: string = '';
  feedType: string;
  source: string = '';

  constructor() { }

  ngOnInit() {
    this.lastest_idols = this.seedIdolsData();
  }

  private seedIdolsData(): Idols {
    let idols: Idols = new Idols();
    idols.status = 'OK';
    idols.source = 'namu-Wiki';
    idols.sortBy = 'top';
    idols.girls = this.seedGirls();
    return idols;
  }

  private seedGirls(): Girl[] {
    const girls: Girl[] = new Array();
    girls.push(
      { "name": "아이린", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1991-03-29", "height": 158, "imageUrl": "https://w.namu.la/s/e2ad961635e3e87ccbf75391e61053522a81c9f15025f1c9818603aded897cd91ab3be73a1c163984c38090d0f2f0b7d07467e4a6314256836ccb3c97e5ece019244c9cfc666bf53bd1becedaff30d03ab408be431d884dc2bf5e67490f9d07d" },
      { "name": "슬기", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1994-02-10", "height": 161, "imageUrl": "https://w.namu.la/s/a49cf0a96f8f9ce49b45535f8b4af60a5a99fc83b6a97191ccc537c8fca48e7828b3a530f0b127709a57f66444e7ee7864fc9515cfd1490c3b246d0d3df6dce52e6ab387c8ea83970572698dda8087d5710671aadccd79a1e06c15f46ee24db6" },
      { "name": "웬디", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1994-02-21", "height": 159, "imageUrl": "https://w.namu.la/s/5cd947cfc0b20af7d162ece93f21ee8ba659cfd138275dba51a2a0eadad44e0d081ff6ca587400e8fa823f173490add399563a2e2dc36fc983cfee5d89a736db77f80f828d9e50a09809cbe4749e7b702d3fe4d0f2d5b117e2b5b1ae60bcb287" },
      { "name": "조이", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1996-09-03", "height": 167, "imageUrl": "https://w.namu.la/s/64e82e208d786052086211af47b49187c2a6b3d53a824cb1a1387b1d26e2bfe30eef613f6582af0188d17cea48cf027758f4ffc8cd73ae7d5f10746a2da887e4e947feb52cb6116a844f671fd81f0af897e349ddacefd3dfcc0a36fadc9b46ef" },
      { "name": "예리", "group": "레드벨벳", "company": "SM Entertainment", "birth": "1999-03-05", "height": 158, "imageUrl": "https://w.namu.la/s/1dee25b2e27c9aff3375af89d970766a7232234510b09578291980f0a98390ec15b18ad95efa19b5348e4934bd4015f4f1e202744bbe5c93e6ff82c604d457e212a91e5b0da02afd7e59d7f51fa3143a2ec417085e0131d4c244dc31c57290fc" },
      { "name": "나연", "group": "트와이스", "company": "JYP Entertainment", "birth": "1995-09-22", "height": 163, "weight": 48, "imageUrl": "https://w.namu.la/s/c5b2ca4bed22e2b5d4e7c4656cedf965d4722897fa6be3df80ac23f9c7bbde7779b61483f5cb722e964a23d600e31e6e40fe70f15f47106c8ea2f339245764bf3f5a9d6f9678a20bbcda74365c4e385cb1a8d3ed2b2d6335a0b24262387a5d15" },
      { "name": "정연", "group": "트와이스", "company": "JYP Entertainment", "birth": "1996-11-01", "height": 167, "weight": 49, "imageUrl": "https://w.namu.la/s/f662d93c679f02dd1f3c07ef464edc17574c45b363fb9c97876035bbc62a6726142f6e1fbc14be718c8886b03659d80f4f1969d7b905677a216080ee1dc9a3583ed217a678232c839c4fbb623e674e3bc7f0028ad37169ca250574e47a826e2f" },
      { "name": "모모", "group": "트와이스", "company": "JYP Entertainment", "birth": "1996-11-09", "height": 162, "weight": 48, "imageUrl": "https://w.namu.la/s/395d6fd4f10144396b360d1eed2fac3ed9b18177e244bc80ea072847ff809d7b534520acfeceff074313c97ca531861c2fe65cdbee24518d16e97a9074337c1eb40705f8e4eddd8b0736ae6b8ed09aa606f743b6a4c69d8e9cb66e13f54b9e1a" },
      { "name": "사나", "group": "트와이스", "company": "JYP Entertainment", "birth": "1996-12-29", "height": 164, "weight": 45, "imageUrl": "https://w.namu.la/s/bfef2a9ba4714200d44db0ece1637c130f412d204ffc5697331412220929cadf1ce8ef398c28f58efd4aa8282ec372818e0ef45752c66a7fe7a96a88ddac8ad35d3a735e5afeb45d1790ac65510e2e98f7d6cc1f38ad51b400031785bcf5c3ff" },
      { "name": "지효", "group": "트와이스", "company": "JYP Entertainment", "birth": "1997-02-01", "height": 160, "weight": 47, "imageUrl": "https://w.namu.la/s/dca6ce1ba9f265f4f977274d56171cb8cc1f1ede76d93b96b4a52001d720e5a92d66d674db5c5db662cbe34c4e0e205f341cce62e89644f483f225458eec2dba13402c57fe8c10576c9d3158e6a623ff9824c43494db5051271e5b819699fb41" },
      { "name": "미나", "group": "트와이스", "company": "JYP Entertainment", "birth": "1997-03-24", "height": 163, "weight": 46, "imageUrl": "https://w.namu.la/s/95175a3c7c6032115ea7663dc7d4d5660dc7d064e17e417eda9c43e5abb8662dbc62506960cf8b5e603a94493300aea30d98cbc4b72ec5ec15ff676e61fba1488cc926c24d27352fcf939d823753bcb359eb0c244276007bb59baaee0312cd45" },
      { "name": "다현", "group": "트와이스", "company": "JYP Entertainment", "birth": "1998-05-28", "height": 158, "weight": 49, "imageUrl": "https://w.namu.la/s/59d36cead3407d127a03cac53e403f59744670c2f2ec74bb053c363830a6d1028c1fdb06080d9a3bdfabcff604b9886787e62bc4a0c7bd621002dabf199caa0d370837d566a4b2df6a16aa42e229a2e66b9f2f11b43bd53343ad0315cbcfb65a" },
      { "name": "채영", "group": "트와이스", "company": "JYP Entertainment", "birth": "1999-04-23", "height": 160, "weight": 47, "imageUrl": "https://w.namu.la/s/6b823a268f6be650057840177c6d9eae85fe142e635bb7294a4881ef969d2bcd823072c1bbbd27ae7c01b80ee1c9bb18fab22fbd1eb44be3ed12a89fc07687a48f9c541b009cd2a782c8ce4177d0ac5e95bf0f9d1d237b6462590d5ebab23f70" },
      { "name": "쯔위", "group": "트와이스", "company": "JYP Entertainment", "birth": "1999-06-14", "height": 170, "weight": 49, "imageUrl": "https://w.namu.la/s/9b77986a99bc0faf61f39c4c9f7260e97304a48d6719f9d10cda262bf7da0e19f019931fb81e449b6c4a3636f5989b11fa6f6bebe38a87cfb517f6541ccdf93a40b65486276f8e40a43b2e80e982b6f650b54f368cf76e599702cc596f740eb9" },
      { "name": "지수", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1995-01-03", "height": 162, "weight": 44, "imageUrl": "https://w.namu.la/s/28dbd5a73ef9a9da6dda0ae6144ca99f73b9920b65b00ffdd05e236ae15b52b9587052ff60fb6a903e135d50a740578d67b2437846c91eb6203312f2af3d2eded3d02889b2d9f33e2b3d663b15b8f14aad99425972d81e5f2255ef09fef8a534" },
      { "name": "제니", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1996-01-16", "height": 163, "imageUrl": "https://w.namu.la/s/720fb214ced4ad48f014412b23bb744fcd06e98d286562932a9e91bb1b49ae6318dc6ff9a8bf9b23213a88a55219f5501fbb7b53b459e875395ec09d9e4a7025a0e09da371b7bbd3b2c73934303b895a0d563cb8c649813a7195f8f65e709dfd" },
      { "name": "로제", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1997-02-11", "height": 168, "weight": 46, "imageUrl": "https://w.namu.la/s/3b520c6e61bcdb5df9d8c7b3f3afab11d7b88558bf5b4beebe86df2957465166683d5a39fd72ef2ff6deb50a8f36c15edf111d8cb83e9ba32ec8e0ae48ea89e7c372aa97a350b89cf65110b4ba75b7785050211cf9cb0760ed7ee9ff56132a4b" },
      { "name": "리사", "group": "블랙핑크", "company": "YG Entertainment", "birth": "1997-03-27", "height": 166.5, "weight": 44.7, "imageUrl": "https://w.namu.la/s/d0fc58383de6b564443da45778f49bb2bf4ee42978d58417a2cb0b935054809c4ae0f6fefb44dc7de373bbf9e3d4c585df961ced28c2953af75489fa10f7515e9029bcfc1693ebb65b0f27d578507fed1bf6bddf1b4ccc005a4212dbbe4f532e" }
    );
    return girls;
  }
}
