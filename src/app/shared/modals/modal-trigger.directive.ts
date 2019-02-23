import { Directive, Inject, ElementRef, OnInit, Input } from "@angular/core";
import { JQ_TOKEN } from "../injectiontokens/jQuery.sevice";

@Directive({
    selector : '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
    @Input('modal-trigger') modalRef : string;
    constructor( @Inject(JQ_TOKEN) private $ : any, ref : ElementRef){
        this.el = ref.nativeElement;
    }

    ngOnInit(){
        this.el.addEventListener('click', event => {
            this.$(`#${this.modalRef}`).modal();
        })
    }

}