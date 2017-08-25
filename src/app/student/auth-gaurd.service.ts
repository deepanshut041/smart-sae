import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { StudentService }      from './student.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _studentService: StudentService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this._studentService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this._studentService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/student/login']);
    return false;
  }
}