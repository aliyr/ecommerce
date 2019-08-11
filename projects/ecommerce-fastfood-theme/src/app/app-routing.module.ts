import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { OrderComponent } from "./pages/order/order.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { OrderDetailRegisterComponent } from "./pages/order-detail-register/order-detail-register.component";
import { ReviewOrderComponent } from "./pages/review-order/review-order.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "order", component: OrderComponent },
  { path: "login", component: LoginComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "register-detail", component: OrderDetailRegisterComponent },
  { path: "review-order", component: ReviewOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
