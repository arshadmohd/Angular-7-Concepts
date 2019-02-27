import { Injectable } from "@angular/core";

@Injectable()

export class LoginService{

    isAUthenticated : boolean =  false;
    currentUser : {
        userName: string
    };
    authenticateUser(userName: string, password : string) : boolean{
        if(userName == "Arshad" && password == "arshad"){
            this.isAUthenticated =  true;
            this.currentUser = {
                userName
            }
        }
        
        return this.isAUthenticated;
    }


    
}

