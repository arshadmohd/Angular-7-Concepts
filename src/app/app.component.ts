import { Component, Inject } from '@angular/core';
import { JQ_TOKEN } from './shared/injectiontokens/jQuery.sevice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';
  constructor(@Inject(JQ_TOKEN) private $ : any){}
  scrollTop(){
    this.$('html, body').animate({scrollTop : 0},800);
                    return false;
  }
}
