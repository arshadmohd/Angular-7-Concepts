import { Component, OnInit } from "@angular/core";
import { IProduct } from "../shared/datamodels/IProduct";
import { ProductService } from "../shared/services/product.service";
import { forEach } from "@angular/router/src/utils/collection";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../shared/services/cart-service";

@Component({
    selector : 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    productList : IProduct[];  
    selectedProduct : IProduct;      
    productsInCart = [];
    productsInWishList = [];
    constructor(private productService : ProductService, private activatedRoute : ActivatedRoute, private cartService : CartService){
        this.productService.getProductsFromCart().subscribe(
            res => {
                this.productsInCart  = res;
            }
        );
        this.productService.getProductsFromWishList().subscribe(
            res => {
                this.productsInWishList  = res;
            }
        )
     }

    ngOnInit(){
        // call to fetch product list       
        this.activatedRoute.queryParams.subscribe(params => {
            let searchTerm;
            if(params['search']) {
                searchTerm = params['search'].toLowerCase();
            }
            
            this.productService.getProducts().subscribe(
                res => {
                    let productListTemp = [];
                    productListTemp = <IProduct[]>res;
                    if(searchTerm != undefined){
                        this.productList = productListTemp.filter((prod)=>{
                            return prod.productName.toLowerCase().indexOf(searchTerm) != -1;
                        })
                    }else{
                        this.productList = productListTemp;
                    }
                });

        });        
    }

    productInCart(prodId){
        let productInCart = false;
        this.productsInCart.forEach(element => {
          if(element.productId == prodId){
            productInCart =  true;
          }  
        });
        return productInCart;
    }

    productInWishList(prodId){
        let productInWishList = false;
        this.productsInWishList.forEach(element => {
          if(element.productId == prodId){
            productInWishList =  true;
          }  
        });
        return productInWishList;
    }

    setSeletedProduct(product : IProduct){        
        this.selectedProduct = product;
    }

    addProductToCart(product : IProduct){
        this.productService.addToCart(product).subscribe(
            res => {
                this.cartService.countEmmitter.emit(res.length);
            }
        )

    }
    addProductToWishList(product){
        this.productService.addToWishList(product).subscribe(          
        )
    }
   
}