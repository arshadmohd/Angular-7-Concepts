import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../datamodels/IProduct";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService{

    productInCart = [];
    productInWishList = [];
    constructor(private http : HttpClient){

    }
    getProducts() : Observable<Object> {
        return this.http.get('https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json');
               
    }

    addToCart(product){
        let prodAdded  = false;
        for(let prod of this.productInCart){
            if(prod.productId == product.productId){
                prod.quantity = prod.quantity +1;
                prodAdded =  true;
                break;
            }
        }
        if(!prodAdded){
            product.quantity = 1;
            this.productInCart.push(product);
            prodAdded = true;
        }

        var emitter =  new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(this.productInCart);
        },100);

        return emitter;
    }

    deleteProductFromCart(product){
        let updatedCart = this.productInCart.filter( prod => prod.productId != product.productId);
        this.productInCart = updatedCart;

        var emitter =  new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(this.productInCart);
        },100);

        return emitter;
    }

    getProductsFromCart(){
        var emitter =  new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(this.productInCart);
        },100);

        return emitter;
    }
    getProductsFromWishList(){
        var emitter =  new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(this.productInWishList);
        },100);        
        return emitter;
    }

    addToWishList(product){
        let prodAddedAlready  = false;
        for(let prod of this.productInWishList){
            if(prod.productId == product.productId){
                prodAddedAlready =  true;
                break;
            }
        }
        if(!prodAddedAlready){
            this.productInWishList.push(product);
            prodAddedAlready = true;
        }

        var emitter =  new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(this.productInWishList);
        },100);        
        return emitter;
       
    }

    
}