import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ModalModule } from "ngx-bootstrap/modal";
import { CarouselModule } from "ngx-owl-carousel-o";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { OrderComponent } from "./pages/order/order.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ComponentModule } from "./modules/component/component.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ReviewOrderComponent } from "./pages/review-order/review-order.component";
import { AttributesDialogComponent } from "./components/attributes-dialog/attributes-dialog.component";
import { PostcodeDialogComponent } from "./components/postcode-dialog/postcode-dialog.component";
import { OrderDetailRegisterComponent } from "./pages/order-detail-register/order-detail-register.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    HomeComponent,
    PostcodeDialogComponent,
    OrderComponent,
    LoginComponent,
    ContactComponent,
    OrderDetailRegisterComponent,
    AttributesDialogComponent,
    ReviewOrderComponent
  ],
  imports: [
    ComponentModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PostcodeDialogComponent, AttributesDialogComponent]
})
export class AppModule {}
