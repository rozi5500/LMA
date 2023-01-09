import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT;

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Library-movies API')
    .setDescription('API movies library documentation for Nick and Vasiliy')
    .setVersion('1.0')
    .addTag('movies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://sakura-iota.vercel.app',
    ],
    credentials: true,
  });

  await app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  });
}
bootstrap();
