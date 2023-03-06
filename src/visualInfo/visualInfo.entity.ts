import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import IVisualInfo from './visualInfo.interface';
@Entity()
export class VisualInfo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'jsonb' })
  info: IVisualInfo;
}
