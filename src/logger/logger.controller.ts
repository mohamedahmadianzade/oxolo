import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('logs')
export class LoggerController {
  constructor(private loggerService: LoggerService) {}
  @Get('')
  getAll() {
    return this.loggerService.getAll();
  }
}
