import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { Logger } from './model/logger.entity';
import ILog from './model/logger.interface';

@Injectable()
export class LoggerService {
  /**
   *
   * Log error in logger tabe in database and console too.
   * Used Active Record Pattern to save information to database
   * @param {Error} error
   * @memberof LoggerService
   */
  log(error: any): void {
    console.log('-------------------------');
    console.log(error);
    console.log('-------------------------');
    const logger = new Logger();
    logger.message = error.message;
    logger.error = JSON.stringify(error, Object.getOwnPropertyNames(error));
    logger.date = new Date();
    logger.save();
  }

  /**
   * Get all stored log in database
   *
   * @return {*}  {Promise<Logger[]>}
   * @memberof LoggerService
   */
  async getAll(): Promise<ILog[]> {
    const result = await Logger.find();
    return result.map((log) => ({
      date: moment(log.date).format('YYYY-MM-DD HH:mm'),
      message: log.message,
      error: log.error,
    }));
  }

  success(message: string, data?: any): any {
    return {
      sucess: true,
      data,
      message,
    };
  }
  fail(message: string, error?: any): any {
    this.log(error);
    return {
      sucess: false,
      message,
    };
  }
}
