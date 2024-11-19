export type guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNmber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNmber: string;
};

export type LocalGuardin = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanetAddress: string;
  guardian: guardian;
  LocalGuardian: LocalGuardin;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
