import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/services/product.service";
import { CartService } from "../shared/services/cart-service";

@Component({
    selector : 'cart',
    templateUrl : './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

    cartProducts : any[];
    grandTotal : number = 0;
    constructor(private productService : ProductService, private cartService : CartService){

    }
    ngOnInit(){
        this.productService.getProductsFromCart().subscribe(
            res => {
                this.cartProducts = res;
                this.cartProducts.forEach( product => {
                    this.grandTotal = this.grandTotal + product.quantity*product.productPrice;
                });
            }
        );
    }

    deleteProductFromCart(product){
        console.log("deleteProductFromCart"+product);
        this.productService.deleteProductFromCart(product).subscribe(
            res => {
                this.cartProducts = res;
                this.cartService.countEmmitter.emit(this.cartProducts.length);
            }
        )
    }
}