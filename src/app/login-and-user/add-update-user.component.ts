import { Component, OnInit } from "@angular/core";
import { LoginService } from "../shared/services/login.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";

@Component({
    selector: 'updateuser',
    templateUrl: './add-update-user.component.html',
    styleUrls : ['./add-update-user.component.css']
})

export class UserComponent implements OnInit{

    name: FormControl;
    age: FormControl;
    email: FormControl;
    gender : FormControl;
    registrationForm: FormGroup;
    constructor(private loginService : LoginService){}

    ngOnInit(){
        this.name =  new FormControl("", [Validators.required]);
        this.age =  new FormControl("", [Validators.required]);
        this.gender  =new FormControl("male", [Validators.required]);
        this.email =  new FormControl("arshad.md1989@gmail.com", [Validators.email]);

        this.registrationForm =  new FormGroup({
            name :  this.name,
            age : this.age,
            gender : this.gender,
            email : this.email

        });

    }

    submitForm(regForm){
        console.log(regForm);
        if(regForm.valid){
            console.log("Form is valid");
        }else{
            console.log("Form is not valid");
        }
    }
}