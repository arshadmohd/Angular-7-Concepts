import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginService } from "../shared/services/login.service";

@Injectable()
export class AuthGaurdService implements CanActivate{
    constructor(private loginService : LoginService, private router : Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot){
            if(this.loginService.isAUthenticated){
                return true;
            }else{
                this.router.navigate(['/login']);
                return false;
            }
    }
}