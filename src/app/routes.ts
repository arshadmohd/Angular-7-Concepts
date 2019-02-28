import { Routes } from "@angular/router";
import { ProductListComponent } from "./product/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login-and-user/login.component";
import { AuthGaurdService } from "./login-and-user/auth-gaurd.service";
import { UserComponent } from "./login-and-user/add-update-user.component";

export const appRoutes : Routes = [
    { path: 'products', component : ProductListComponent},
    { path: 'cart', component : CartComponent, canActivate: [AuthGaurdService]},
    { path: 'wishlist', component : ProductListComponent},
    { path: 'login', component : LoginComponent},
    { path: 'updateuser', component : UserComponent},
    { path: '', redirectTo : '/products', pathMatch : 'full'},

]
