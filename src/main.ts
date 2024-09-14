import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as path from 'path';
import { AppModule } from './app.module';
import { existsSync, mkdirSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const uploadDir = path.join(process.cwd(), 'pdfs');
  if(!existsSync(uploadDir)){
    mkdirSync(uploadDir);
  }

  app.use('/pdfs', express.static(path.join(process.cwd(), 'pdfs')));

  // global prefix
  app.setGlobalPrefix("api/v1");
  
  await app.listen(3000);
}
bootstrap();
