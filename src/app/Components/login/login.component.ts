import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/Model/AuthRequest';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  massage: string | undefined;

  constructor(private _authservice: AuthService) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      UserName: new FormControl(null),
      Password: new FormControl(null),
    });
  }

  AuthenticateUser(student: AuthRequest) {
    this._authservice.AuthLogin(student).subscribe((value) => {
      //this.massage = 'Record Authenticated Successfully';
      console.log(value);
    });
  }

  onsubmit() {
   if (this.loginForm.valid) {
debugger;

     const userCred = this.loginForm.value;
     this.AuthenticateUser(userCred);

     // let password=this.loginForm.get('Password').value;
      //let username=this.loginForm.get('UserName').value;
     
      //console.log(password);
      //console.log(username);
    }
  }
}
