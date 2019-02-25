import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "../shared/datamodels/IProduct";
import { ProductService } from "../shared/services/product.service";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent{
    @Input() product : IProduct;
    @Input() productInCart;
    @Input() productInWishList;
    constructor(private productService : ProductService){
    }

    
}