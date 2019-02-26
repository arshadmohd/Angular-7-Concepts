import { Component } from "@angular/core";

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    userName: string;
    password: string;
    login(){
        console.log("User Name ",this.userName);
        console.log("Password ",this.password);
    }
}