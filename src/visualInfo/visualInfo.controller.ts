import { Body, Controller, Delete, Get, Post } from '@nestjs/common/decorators';
import { LoggerService } from 'src/logger/logger.service';
import { InfoDTO } from './model/visualInfo.dto';
import { VisualInfoService } from './visualInfo.service';

/**
 * All information about the text Element like text and position
 *
 * in future version we can work with more fields like color,font-family,font-size and etc.
 *
 * @export
 * @class VisualInfoController
 */
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
      return this.loggerService.success(
        'Information saved successfully ( text and position )',
      );
    } catch (error) {
      return this.loggerService.fail('Error saving information!', error);
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
      return this.loggerService.success(
        'Current information of text element',
        data,
      );
    } catch (error) {
      return this.loggerService.fail(
        'Error getting current information of text element!',
        error,
      );
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
      return this.loggerService.success(
        'History of text element position and other information',
        data,
      );
    } catch (error) {
      return this.loggerService.fail(
        'Error getting hisotry of text element information!',
        error,
      );
    }
  }
  @Delete('all')
  async deleteAll() {
    try {
      const data = await this.visualInfoService.deleteAll();
      return this.loggerService.success(
        'All History of text element position and other information are deleted successfully',
        data,
      );
    } catch (error) {
      this.loggerService.fail(
        'Error deleting hisotry of text element information!',
        error,
      );
    }
  }
}
