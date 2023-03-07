import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisualInfo } from './model/visualInfo.entity';
import { VisualInfoService } from './visualInfo.service';
import { VisualInfoController } from './visualInfo.controller';

@Module({
  controllers: [VisualInfoController],
  providers: [VisualInfoService],
  imports: [TypeOrmModule.forFeature([VisualInfo])],
})
export class VisualInfoModule {}
