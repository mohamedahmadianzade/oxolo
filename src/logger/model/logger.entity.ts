import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from 'typeorm';

@Entity('logger')
export class Logger extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: new Date() })
  date: Date;
  @Column()
  message: string;
  @Column()
  error: string;
}
