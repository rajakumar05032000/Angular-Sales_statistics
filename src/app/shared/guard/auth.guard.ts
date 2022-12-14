import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
// import { AuthService } from '../../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {

        this.router.navigate(['/layout']);
        return false;
    }
}
