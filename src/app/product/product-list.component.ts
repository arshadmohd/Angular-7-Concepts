import { Component, OnInit } from "@angular/core";
import { IProduct } from "../shared/datamodels/IProduct";
import { ProductService } from "../shared/services/product.service";
import { forEach } from "@angular/router/src/utils/collection";

@Component({
    selector : 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    productList : IProduct[];  
    selectedProduct : IProduct;  
    constructor(private productService : ProductService){ }

    ngOnInit(){
        // call to fetch product list
        this.productService.getProducts().subscribe(
           res => this.productList = <IProduct[]>res);
    }

    setSeletedProduct(product : IProduct){        
        this.selectedProduct = product;
    }

    addProductToCart(product : IProduct){
        this.productService.addToCart(product);
    }

    addToWishList(product){
        this.productService.addToWishList(product);
    }
}