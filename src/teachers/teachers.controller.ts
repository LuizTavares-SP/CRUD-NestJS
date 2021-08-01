import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Teacher } from './teachers.model';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  // CREATE
  @Post()
  async createTeacher(@Body() Teacher): Promise<any> {
    const result = await this.teachersService.createTeacher(Teacher);
    return { id: result };
  }

  // READ
  @Get()
  readAll(): Promise<any> {
    return this.teachersService.readAll();
  }

  @Get(':drt')
  getTeacher(@Param('drt') drt: number) {
    return this.teachersService.getTeacherByDRT(drt);
  }

  // UPDATE
  @Patch()
  async updateTeacher(@Body() teacher: Teacher): Promise<any> {
    return await this.teachersService.updateTeacher(teacher);
  }

  // DELETE
  @Delete(':drt')
  async deleteTeacher(@Param('drt') drt: number) {
    this.teachersService.deleteTeacher(drt);
    return null;
  }
}
