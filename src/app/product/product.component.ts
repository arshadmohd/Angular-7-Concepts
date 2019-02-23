import { Component, Input } from "@angular/core";
import { IProduct } from "../shared/datamodels/IProduct";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent{
    @Input() product : IProduct;
}