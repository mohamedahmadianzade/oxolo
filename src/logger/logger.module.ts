import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';
import { Logger } from './model/logger.entity';

@Global()
@Module({
  exports: [LoggerService],
  providers: [LoggerService],
  controllers: [LoggerController],
  imports: [TypeOrmModule.forFeature([Logger])],
})
export class LoggerModule {}
