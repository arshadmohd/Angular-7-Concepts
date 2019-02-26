import { Routes } from "@angular/router";
import { ProductListComponent } from "./product/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login-and-user/login.component";

export const appRoutes : Routes = [
    { path: 'products', component : ProductListComponent},
    { path: 'cart', component : CartComponent},
    { path: 'wishlist', component : ProductListComponent},
    { path: 'login', component : LoginComponent},
    { path: '', redirectTo : '/products', pathMatch : 'full'},

]
