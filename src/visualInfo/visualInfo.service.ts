import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { Repository } from 'typeorm';
import { InfoDTO } from './model/visualInfo.dto';
import { VisualInfo } from './model/visualInfo.entity';
import { IVisualInfoOutput } from './model/visualInfo.interface';

@Injectable()
export class VisualInfoService {
  constructor(
    @InjectRepository(VisualInfo)
    private visualInfoRepository: Repository<VisualInfo>,
  ) {}

  /**
   * Get the last position of the text element
   *
   * @return {*}  {(Promise<VisualInfo | null>)}
   * @memberof VisualInfoService
   */
  async getCurrent(): Promise<IVisualInfoOutput | null> {
    const info = await this.visualInfoRepository.find({
      order: {
        id: 'desc',
      },
      take: 1,
    });
    return info ? this.format(info[0]) : null;
  }

  /**
   * Get All history of text elements
   *
   * @return {*}  {Promise<IVisualInfoOutput[]>}
   * @memberof VisualInfoService
   */
  async getAll(): Promise<IVisualInfoOutput[]> {
    const result = await this.visualInfoRepository.find({
      order: {
        id: 'desc',
      },
    });
    return result.map((item) => this.format(item));
  }

  /**
   * Delete all history of text elements
   *
   * @return {*}  {Promise<void>}
   * @memberof VisualInfoService
   */
  async deleteAll(): Promise<void> {
    await this.visualInfoRepository.delete({});
  }

  /**
   * format the text element information
   *
   * @param {VisualInfo} info
   * @return {*}  {IVisualInfoOutput}
   * @memberof VisualInfoService
   */
  format(info: VisualInfo): IVisualInfoOutput {
    if (!info) return null;
    return {
      text: info.info.text,
      timeStamp: moment(info.info.timeStamp).format('YYYY-MM-DD HH:mm:ss'),
      position: {
        x: parseInt(info.info.position.split(',')[0]),
        y: parseInt(info.info.position.split(',')[1]),
      },
    };
  }

  /**
   * Save the last position of Text element in the table
   * We keep all the information because of supporing the operation like Undo/Redo
   *
   * @param {InfoDTO} info
   * @return {*}  {Promise<void>}
   * @memberof VisualInfoService
   */
  async saveInfo(info: InfoDTO): Promise<void> {
    const visualInfo = new VisualInfo();
    visualInfo.info.text = info.text;
    visualInfo.info.timeStamp = new Date();
    visualInfo.info.position = `${info.position.x},${info.position.y}`;
    await this.visualInfoRepository.save(visualInfo);
  }

  /**
   * Get the previous informtaion about the text element
   *
   * @param {number} currentId
   * @return {*}  {(Promise<IVisualInfoOutput | null>)}
   * @memberof VisualInfoService
   */
  async undo(currentId: number): Promise<IVisualInfoOutput | null> {
    const info = await this.visualInfoRepository.findOneBy({
      id: currentId - 1,
    });
    return this.format(info);
  }

  /**
   * Get the next position of the text element
   *
   * @param {number} currentId
   * @return {*}  {(Promise<IVisualInfoOutput | null>)}
   * @memberof VisualInfoService
   */
  async redo(currentId: number): Promise<IVisualInfoOutput | null> {
    const info = await this.visualInfoRepository.findOneBy({
      id: currentId + 1,
    });
    return this.format(info);
  }
}
