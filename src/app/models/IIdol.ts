export interface IIdol {
  name: string;
  birth: string;
  height: number;
  weight?: number;
  imageUrl: string;

  getFormattedBirth(): string;
}