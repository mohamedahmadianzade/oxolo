import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('logs')
export class LoggerController {
  constructor(private loggerService: LoggerService) {}

  /**
   * Get all logs about the errors happened in applicaion
   * @return {*}
   * @memberof LoggerController
   */
  @Get('')
  async getAll() {
    try {
      const data = await this.loggerService.getAll();
      return this.loggerService.success('Get all Logs', data);
    } catch (error) {
      this.loggerService.log(error);
      return this.loggerService.fail('error getting logs!', error);
    }
  }
}
