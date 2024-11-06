export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  
  export type TGuardian = {
    father: string;
    fatherOccuption: string;
    fatherContact: string;
    mother: string;
    motherOccuption: string;
    motherContact: string;
  };
  
  export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
  };
  
  export type TStudent = {
    id: string;
    name: TUserName;
    gender: 'male' | 'female' | 'other';
    dateOfBirth?: string;
    email: string;
    password: string;
    contactNo: string;
    emargencyContact: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presetAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    photoUrl?: string;
    isActive: 'active' | 'Blocked';
    isDeleated: boolean;
  };