import { IIdol } from './IIdol';

export class GirlGroup {
  private idols: IIdol[];

  constructor(
    public name: string,
    public company: string, 
  ) {}

  get members(): IIdol[] {
    return this.idols;
  }

  set members(idols: IIdol[]) {
    if (idols.length > 0) {
      this.idols = idols;
    }
  }
}