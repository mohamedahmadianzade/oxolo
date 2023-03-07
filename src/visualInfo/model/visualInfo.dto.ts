import { IsNotEmpty, ValidateNested } from 'class-validator';

export class TextPosition {
  x: number;
  y: number;
}

export class InfoDTO {
  @ValidateNested()
  position: TextPosition;
  @IsNotEmpty()
  text: string;
}
