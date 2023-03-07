import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoDTO } from './model/visualInfo.dto';
import { VisualInfo } from './model/visualInfo.entity';

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
  async getCurrent(): Promise<VisualInfo | null> {
    const info = await this.visualInfoRepository.find({
      order: {
        id: 'desc',
      },
      take: 1,
    });
    return info ? info[0] : null;
  }

  /**
   * Get All history of text elements
   *
   * @return {*}  {Promise<VisualInfo[]>}
   * @memberof VisualInfoService
   */
  async getAll(): Promise<VisualInfo[]> {
    return this.visualInfoRepository.find();
  }

  /**
   * Get the previous informtaion about the text element
   *
   * @param {number} currentId
   * @return {*}  {(Promise<VisualInfo | null>)}
   * @memberof VisualInfoService
   */
  async undo(currentId: number): Promise<VisualInfo | null> {
    const info = await this.visualInfoRepository.findOneBy({
      id: currentId - 1,
    });
    return info;
  }

  /**
   * Get the next position of the text element
   *
   * @param {number} currentId
   * @return {*}  {(Promise<VisualInfo | null>)}
   * @memberof VisualInfoService
   */
  async redo(currentId: number): Promise<VisualInfo | null> {
    const info = await this.visualInfoRepository.findOneBy({
      id: currentId + 1,
    });
    return info;
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
    visualInfo.info.timeStamp = new Date();
    visualInfo.info.text = info.text;
    visualInfo.info.position = `${info.position.x},${info.position.y}`;
    await this.visualInfoRepository.save(visualInfo);
  }
}
