import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Awb } from './awb.entity';
import { Invoice } from './invoice.entity';
import { Scan } from './scan.entity';
import { AwbService } from './awb.service';
import { AwbController } from './awb.controller';

@Module({
  imports: [SequelizeModule.forFeature([Awb, Invoice, Scan])],
  controllers: [AwbController],
  providers: [AwbService],
  exports: [AwbService],
})
export class AwbModule {}
