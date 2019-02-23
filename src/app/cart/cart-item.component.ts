import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'cart-item',
    templateUrl : './cart-item.component.html',
    styleUrls:['./cart-item.component.css']
})

export class CartItemComponent{
    @Input() product : any;
    @Output() prodDeleted : EventEmitter<any> = new EventEmitter<any>();

    productDeleted(product){
        console.log("productDeleted : "+product);
        this.prodDeleted.emit(product);
    }
}