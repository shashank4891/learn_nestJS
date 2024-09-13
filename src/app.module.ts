import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AwbController } from './modules/awb/awb.controller';
import { AwbService } from './modules/awb/awb.service';
import { AwbModule } from './modules/awb/awb.module';
import { Awb } from './modules/awb/awb.entity';
import { Invoice } from './modules/awb/invoice.entity';
import { Scan } from './modules/awb/scan.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME_DEVELOPMENT,
      models: [Awb, Invoice, Scan],
      autoLoadModels: true,
      synchronize: false,
    }),

    AwbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
