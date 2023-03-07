import { Body, Controller, Get, Post } from '@nestjs/common/decorators';
import { LoggerService } from 'src/logger/logger.service';
import { InfoDTO } from './model/visualInfo.dto';
import { VisualInfoService } from './visualInfo.service';

@Controller('info')
export class VisualInfoController {
  constructor(
    private visualInfoService: VisualInfoService,
    private loggerService: LoggerService,
  ) {}

  /**
   * Save the current information about the text element
   *
   * @param {InfoDTO} info
   * @return {*}
   * @memberof VisualInfoController
   */
  @Post()
  async saveInfo(@Body() info: InfoDTO) {
    try {
      await this.visualInfoService.saveInfo(info);
      return {
        success: true,
        message: 'information saved successfully',
      };
    } catch (error) {
      this.loggerService.log(error);
      return {
        success: false,
        message: 'error saving information!',
      };
    }
  }

  /**
   * Get the cuurrent information of text element
   *
   * @return {*}
   * @memberof VisualInfoController
   */
  @Get()
  async getCurrentInfo() {
    try {
      const data = await this.visualInfoService.getCurrent();
      return {
        message: 'current information of text element',
        data,
      };
    } catch (error) {
      this.loggerService.log(error);
      return {
        success: false,
        message: 'error getting current information of text element!',
      };
    }
  }

  /**
   * Get all history of saved information about the text elemnt
   *
   * @return {*}
   * @memberof VisualInfoController
   */
  @Get('all')
  async getAll() {
    try {
      const data = await this.visualInfoService.getAll();
      return {
        message: 'History of text element position and other information',
        data,
      };
    } catch (error) {
      this.loggerService.log(error);
      return {
        success: false,
        message: 'error getting hisotry of text element information!',
      };
    }
  }
}
