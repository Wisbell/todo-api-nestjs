import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // NOTE: Enable cors is necessary for cross domain requests
  // TODO: Check if enableCors is necessary when deployed
  app.enableCors(); 
  await app.listen(3000);
}
bootstrap();
