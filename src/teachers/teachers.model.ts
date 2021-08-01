import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  drt: { type: Number, required: true },
  discipline: { type: String, required: true }
});

export interface Teacher{
  id: string;
  name: string,
  drt: number,
  discipline: string;
}
