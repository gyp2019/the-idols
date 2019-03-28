import { IGirl } from './IGirl';

export class Idols {
  private _girls: IGirl[];

  constructor(
    public status: string,
    public source: string,
    public sortBy: string,
  ) {}

  get girls(): IGirl[] {
    return this._girls;
  }

  set girls(value: IGirl[]) {
    if (value.length > 0) {
      this._girls = value;
    }
  }
}
