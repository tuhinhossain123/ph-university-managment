import { model, Schema } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    maxlength: [20, 'First name more than 20 characters'],
    trim: true,
    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalizen formate',
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    maxlength: [20, 'Last name more than 20 characters'],
    trim: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  father: {
    type: String,
    required: [true, 'Father name is required.'],
    trim: true,
  },
  fatherOccuption: {
    type: String,
    required: [true, 'Father’s occupation is required.'],
    trim: true,
  },
  fatherContact: {
    type: String,
    required: [true, 'Father’s contact number is required.'],
    trim: true,
  },
  mother: {
    type: String,
    required: [true, 'Mother name is required.'],
    trim: true,
  },
  motherOccuption: {
    type: String,
    required: [true, 'Mother’s occupation is required.'],
    trim: true,
  },
  motherContact: {
    type: String,
    required: [true, 'Mother’s contact number is required.'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required.'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian’s occupation is required.'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian’s contact number is required.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian’s address is required.'],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: [true, 'Student ID is required.'],
    unique: true,
    trim: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
    trim: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender option.',
    },
    required: [true, 'Gender is required.'],
    trim: true,
  },
  dateOfBirth: {
    type: String,
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Student contact number is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Student password is required.'],
    trim: true,
  },
  emargencyContact: {
    type: String,
    trim: true,
  },
  bloodGroup: {
    type: String,
    trim: true,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
  },
  presetAddress: {
    type: String,
    required: [true, 'Present address is required.'],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required.'],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian details are required.'],
    trim: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian details are required.'],
    trim: true,
  },
  photoUrl: {
    type: String,
    trim: true,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status option.',
    },
    default: 'active',
    trim: true,
  },
  isDeleated: {
    type: Boolean,
    default: false,
  },
});

export const StudentModel = model<TStudent>('Student', studentSchema);
