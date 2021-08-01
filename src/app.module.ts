import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TeachersModule,
    MongooseModule.forRoot(
      '<inserir endereço no mongodb para a API',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
