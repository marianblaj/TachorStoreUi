import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "./components/cart/cart.component";
import {LoginComponent} from "./components/security/login/login.component";
import {RegisterComponent} from "./components/security/register/register.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "products", component: ProductsPageComponent},
  {path: "cart", component: CartComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
