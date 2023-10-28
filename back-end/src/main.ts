import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger
  const swaggerconfig = new DocumentBuilder()
    .setTitle('Servicio aprender ingles o cualquier otro idioma')
    .setDescription('servicio para obtener informacion y aprender ingles')
    .setVersion('V1')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerconfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
