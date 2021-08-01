import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './teachers.model';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }]),
  ],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
