import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ModalModule } from "ngx-bootstrap/modal";
import { CarouselModule } from "ngx-owl-carousel-o";

import { DatePipe } from "../../pipes/date.pipe";
import { AppRoutingModule } from "../../app-routing.module";
import { CardNumberPipe } from "../../pipes/card-number.pipe";
import { TogglerDirective } from "../../directives/toggler.directive";
import { ReceiptComponent } from "../../components/receipt/receipt.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { PageCardComponent } from "../../components/page-card/page-card.component";
import { AccordionComponent } from "../../components/accordion/accordion.component";
import { ActionButtonComponent } from "../../components/action-button/action-button.component";
import { CustomSelectComponent } from "../../components/custom-select/custom-select.component";
import { AccordionBodyComponent } from "../../components/accordion/accordion-body/accordion-body.component";
import { AccordionGroupComponent } from "../../components/accordion/accordion-group/accordion-group.component";
import { AccordionHeaderComponent } from "../../components/accordion/accordion-header/accordion-header.component";

@NgModule({
  declarations: [
    CarouselComponent,
    AccordionComponent,
    AccordionGroupComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
    ReceiptComponent,
    ActionButtonComponent,
    CardNumberPipe,
    DatePipe,
    TogglerDirective,
    PageCardComponent,
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    CarouselComponent,
    AccordionComponent,
    AccordionGroupComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
    ReceiptComponent,
    ActionButtonComponent,
    CardNumberPipe,
    DatePipe,
    TogglerDirective,
    CarouselModule,
    ModalModule,
    PageCardComponent,
    CustomSelectComponent
  ]
})
export class ComponentModule {}
