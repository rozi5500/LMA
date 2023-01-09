import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

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

  if (process.env.NODE_ENV === 'development') {
    const pathToSwaggerStaticFolder = resolve(process.cwd(), 'swagger-static');

    // write swagger json file
    const pathToSwaggerJson = resolve(
      pathToSwaggerStaticFolder,
      'swagger.json',
    );
    const swaggerJson = JSON.stringify(document, null, 2);
    writeFileSync(pathToSwaggerJson, swaggerJson);
    console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
  }
}
bootstrap();
