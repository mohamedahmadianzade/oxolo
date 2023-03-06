import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisualInfo } from './visualInfo.entity';

@Injectable()
export class VisualInfoService {
  constructor(
    @InjectRepository(VisualInfo)
    private visualInfoRepository: Repository<VisualInfo>,
  ) {}

  async getInfo() {
    await this.visualInfoRepository.create({
      id: 1,
      info: {
        text: '1',
        position: '1',
        timeStamp: '1',
      },
    });
    return this.visualInfoRepository.find();
  }
}
