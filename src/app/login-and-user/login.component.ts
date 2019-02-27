import { Component } from "@angular/core";
import { LoginService } from "../shared/services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    userName: string;
    password: string;
    inValidUser : boolean =  true;
    isloginChecked : boolean =  false;
    constructor( private loginService : LoginService, private router : Router){}
    login(loginForm){
        console.log("Login form: ",loginForm);
      if(loginForm.valid){
        let isAuthenticated =  this.loginService.authenticateUser(loginForm.value.userName, loginForm.value.password);
        if(isAuthenticated){
            console.log("Authentication true");
             this.inValidUser =  false;
             this.isloginChecked =  true;
             this.router.navigate(['/cart']);
        }else{
             console.log("Authentication false");
             this.isloginChecked =  true;
        }
      }
    }
}