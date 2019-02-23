import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListComponent } from './product/product-list.component';
import { appRoutes } from './routes';
import { ProductService } from './shared/services/product.service';
import { ProductComponent } from './product/product.component';
import { JQ_TOKEN } from './shared/injectiontokens/jQuery.sevice';
import { SimpleModalComponent } from './shared/modals/simple-modal.component';
import { ModalTriggerDirective } from './shared/modals/modal-trigger.directive';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item.component';

declare let jQuery;

@NgModule({
  declarations: [    
    AppComponent,
    NavigationComponent,
    ProductListComponent,
    ProductComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService,
  {provide : JQ_TOKEN, useValue: jQuery}],
  bootstrap: [AppComponent]
})
export class AppModule { }
