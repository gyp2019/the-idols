import { IGirl } from './IGirl'

export class Girl implements IGirl{
  name: string;
  birth: string;
  height: number;
  weight?: number;
  group: string;
  company: string;
  imageUrl: string;

  getFormattedBirth(): string {
    const date = new Date(this.birth);
    return date.toLocaleString('ko-KR');
  }
}