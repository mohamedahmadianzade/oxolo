import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export default class Info {
  text: string;
  position: string;
  timeStamp: Date;
}
@Entity('visualInfo')
export class VisualInfo {
  constructor() {
    this.info = new Info();
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'jsonb' })
  info: Info;
}
