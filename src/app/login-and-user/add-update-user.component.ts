import { Component } from "@angular/core";
import { LoginService } from "../shared/services/login.service";

@Component({
    selector: 'updateuser',
    templateUrl: './add-update-user.component.html',
    styleUrls : ['./add-update-user.component.css']
})

export class UserComponent{
    constructor(private loginService : LoginService){}
}