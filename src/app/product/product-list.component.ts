import { Component, OnInit } from "@angular/core";
import { IProduct } from "../shared/datamodels/IProduct";
import { ProductService } from "../shared/services/product.service";
import { forEach } from "@angular/router/src/utils/collection";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    productList : IProduct[];  
    selectedProduct : IProduct;  
    constructor(private productService : ProductService, private activatedRoute : ActivatedRoute){ }

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