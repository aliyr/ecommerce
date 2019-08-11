import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {PostcodeDialogComponent} from 'fast-food/app/components/postcode-dialog/postcode-dialog.component';
import { MealDealProduct } from 'ecommerce-core';
import { ProductsCoreService } from 'ecommerce-core';

@Component({
  selector: 'ec-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public modalRef: BsModalRef;

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // autoplay: true,
    responsive: {
      0: {
        items: 0
      },
      400: {
        items: 0
      },
      740: {
        items: 0
      },
      900: {
        items: 4
      }
    },
    nav: false
  };

  public mealDealProducts: MealDealProduct[];

  constructor(private modalService: BsModalService, private productsCoreService: ProductsCoreService) { }

  ngOnInit() {
    this.mealDealProducts = this.productsCoreService.mealDealProducts;
  }

  openModal() {
    this.modalRef = this.modalService.show(PostcodeDialogComponent, {class: 'medium-dialog-width'});
    this.modalRef.content.closeBtnName = 'close-button';
  }

}
