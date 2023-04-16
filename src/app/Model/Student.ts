export interface Student {
  // Now, write all properties of the Employee class related to an employee that matches with the database.
  id:number;
  password: number;
  studentName: string;
  email: string | undefined;
  dateOfBirth: Date;
  gender: string | undefined;
  address: string | undefined;
  pin: number | undefined;
  isEdit:boolean;

  // constructor(
   
  //   Password: number,
  //   StudentName: string,
  //   Email: string,
  //   DateOfBirth: Date,
  //   Gender: string,
  //   Address: string,
  //   Pin: number
  // ) {
 
  //   this.Password = Password;
  //   this.StudentName = StudentName;
  //   this.Email = Email;
  //   this.DateOfBirth = DateOfBirth;
  //   this.Gender = Gender;
  //   this.Address = Address;
  //   this.Pin = Pin;
  // }
}
