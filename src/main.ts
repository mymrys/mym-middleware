import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, raw } from 'body-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors();
	app.use(json());
	app.use(raw({ type: 'application/xml' }));

	app.useGlobalPipes(new ValidationPipe());

	app.listen(3000).then(() => {
		console.log('Service start on 3000');
	});
}
bootstrap();
