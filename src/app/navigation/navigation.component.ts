import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../shared/services/cart-service";

@Component({
    selector : 'navigation',
    templateUrl: './navigation.component.html',
    styles: [`
    .cart-count{
        position : absolute;
        background: red;
        line-height : 1;
        border-radius : 10px;
        top: 0;
        padding: 1px;
        color: white;
    },
    .navbar-custom ul a{
        color: white!important;
    },
    .login-user-text{
        padding-left: 10px;
        color: orange;
    }

`]
})
export class NavigationComponent{
    brandName : string = 'Shopping Cart';
    searchText : string = "";
    cartItemCount : number = 0;

    constructor(private router : Router, private cartService : CartService){
        this.cartService.countEmmitter.subscribe( count => {
            this.cartItemCount = count;
        })
    }

    searchTerm(text){
        console.log("Tryingh to navigate"+text);
        //this.router.navigate(['/products', { queryParams: { search: text } }])
        this.router.navigateByUrl('/products?search='+text);
    }

}