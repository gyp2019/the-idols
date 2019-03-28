export interface IGirl {
  name: string;
  birth: string;
  height: number;
  weight?: number;
  group: string;
  company: string;
  imageUrl: string;

  getFormattedBirth(): string;
}