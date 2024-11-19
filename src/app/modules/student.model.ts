import { Schema, model } from 'mongoose';
import {
  guardian,
  LocalGuardin,
  Student,
  UserName,
} from './student/student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
});

const guardianSchema = new Schema<guardian>({
  fatherName: {
    type: String,
    require: true,
  },
  fatherOccupation: {
    type: String,
    require: true,
  },
  fatherContactNmber: {
    type: String,
    require: true,
  },
  motherName: {
    type: String,
    require: true,
  },
  motherOccupation: {
    type: String,
    require: true,
  },
  motherContactNmber: {
    type: String,
    require: true,
  },
});

const LocalGuardianSchema = new Schema<LocalGuardin>({
  name: {
    type: String,
    require: true,
  },
  occupation: {
    type: String,
    require: true,
  },
  contactNo: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: UserNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanetAddress: { type: String, required: true },
  guardian: guardianSchema,
  LocalGuardian: LocalGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

//model generate

export const StudentModel = model<Student>('Student', studentSchema);
