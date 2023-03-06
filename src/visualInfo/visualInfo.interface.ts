import { Timestamp } from 'typeorm';

export default interface IVisualInfo {
  text: string;
  position: string;
  timeStamp: Timestamp;
}
