import { Component } from "@angular/core";
import { Router }      from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {
  message:string;
  constructor(public router: Router,public _studentService:StudentService) { 
  }
  login(id,pass) {
    this.message = 'Trying to log in ...';
 
    this._studentService.login(id,pass).subscribe(() => {
      if (this._studentService.isLoggedIn) {
        let redirect = this._studentService.redirectUrl ? this._studentService.redirectUrl : '/student/dashboard';
 
        this.router.navigate([redirect]);
      }
    });
  }
}
