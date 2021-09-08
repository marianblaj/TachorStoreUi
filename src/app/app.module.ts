import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from './components/footer/footer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {CheckpointsPageComponent} from './pages/checkpoints-page/checkpoints-page.component';
import {ProductTableComponent} from './pages/product-table/product-table.component';
import {MatTableModule} from "@angular/material/table";
import {AddProductFormComponent} from './pages/add-product-form/add-product-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import { TestComponent } from './components/test/test.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { ConfirmationCartComponent } from './components/cart/confirmation-cart/confirmation-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductsPageComponent,
    CheckpointsPageComponent,
    ProductTableComponent,
    AddProductFormComponent,
    TestComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmationCartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        FormsModule,
        MatFormFieldModule,
        MatRippleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
        NgbModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
