import { IIdol } from './IIdol';

export class Idol implements IIdol {
  name: string;
  birth: string;
  height: number;
  weight?: number;
  imageUrl: string;

  getFormattedBirth(): string {
    const date = new Date(this.birth);
    return date.toLocaleString('ko-KR');
  }
}