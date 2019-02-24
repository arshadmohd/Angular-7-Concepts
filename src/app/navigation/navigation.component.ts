import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent{
    brandName : string = 'Shopping Cart';
    searchText : string = "";

    constructor(private router : Router){}

    searchTerm(text){
        console.log("Tryingh to navigate"+text);
        //this.router.navigate(['/products', { queryParams: { search: text } }])
        this.router.navigateByUrl('/products?search='+text);
    }
}