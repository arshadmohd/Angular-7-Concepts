import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CartService{
    countEmmitter =  new EventEmitter<number>();
}