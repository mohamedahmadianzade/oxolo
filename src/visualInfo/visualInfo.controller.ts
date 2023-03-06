import { Controller, Get } from '@nestjs/common/decorators';
import { VisualInfoService } from './visualInfo.service';

@Controller('info')
export class VisualInfoController {
  constructor(private visualInfoService: VisualInfoService) {}
  @Get()
  saveInfo() {
    return 'true';
  }
  @Get('getAll')
  getInfo() {
    return this.visualInfoService.getInfo();
  }
}
