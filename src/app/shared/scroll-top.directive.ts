import { Directive, OnInit, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from "./injectiontokens/jQuery.sevice";

@Directive({
    selector: '[scroll-top]',
})
export class ScrollTopDirective implements OnInit{

    el : HTMLElement;
    constructor(@Inject(JQ_TOKEN) private $ : any, private ref : ElementRef){
        this.el = ref.nativeElement;
    }
    ngOnInit(){
        window.addEventListener('scroll', ()=> {
            console.log('Top : ',window.scrollY);

            if(window.scrollY>600){
                this.$('.scrollUp').show();
            }{
                if(window.scrollY<600){
                    this.$('.scrollUp').hide();
                }
            }
            
        })
    }
}