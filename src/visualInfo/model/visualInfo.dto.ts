import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class TextPosition {
  @IsNotEmpty()
  x: number;
  @IsNotEmpty()
  y: number;
}

export class InfoDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TextPosition)
  position: TextPosition;
  @IsNotEmpty()
  text: string;
}
