import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './teachers.model';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<Teacher>,
  ) {}

  async createTeacher(teacher: Teacher) {
    const teacherModel = new this.teacherModel({
      name: teacher.name,
      drt: teacher.drt,
      discipline: teacher.discipline,
    });
    const result = await teacherModel.save();
    return result.id as string;
  }

  async readAll() {
    const teachers = await this.teacherModel.find().exec();
    return teachers.map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      drt: teacher.drt,
      discipline: teacher.discipline,
    }));
  }

  async getTeacherByDRT(drt: number): Promise<Teacher> {
    const teacher = await this.teacherModel.findOne({ drt: drt });
    if (!teacher) {
      throw new NotFoundException('Could not find the teacher.');
    }
    return {
      id: teacher.id,
      name: teacher.name,
      drt: teacher.drt,
      discipline: teacher.discipline,
    };
  }

  async deleteTeacher(drt: number) {
    const result = await this.teacherModel.deleteOne({ drt: drt }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not remove teacher.');
    }
  }

  async updateTeacher(teacher: Teacher): Promise<Teacher> {
    const updatedTeacher = await this.teacherModel.findOne({
      drt: teacher.drt,
    });
    if (!updatedTeacher) {
      throw new NotFoundException('Could not find teacher.');
    }
    if (teacher.name) {
      updatedTeacher.name = teacher.name;
    }
    if (teacher.discipline) {
      updatedTeacher.discipline = teacher.discipline;
    }
    updatedTeacher.save();
    return {
      id: updatedTeacher.id,
      name: updatedTeacher.name,
      drt: updatedTeacher.drt,
      discipline: updatedTeacher.discipline,
    };
  }
}
