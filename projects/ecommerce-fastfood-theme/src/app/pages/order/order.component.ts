import { Component, OnInit } from "@angular/core";
import { ProductsCoreService } from "ecommerce-core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { AttributesDialogComponent } from "fast-food/app/components/attributes-dialog/attributes-dialog.component";
import { ProductCategory } from "ecommerce-core/lib/models/product-category";
import { ReceiptCoreService } from "ecommerce-core";

@Component({
  selector: "ec-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  public modalRef: BsModalRef;
  constructor(
    public productsCoreService: ProductsCoreService,
    public receiptCoreService: ReceiptCoreService,
    public modalService: BsModalService
  ) {}

  public selectCategory(category: ProductCategory, index: number) {
    this.productsCoreService.productsCategory.forEach(cat => {
      cat.isActive = false;
    });
    category.isActive = true;
  }
  ngOnInit() {}

  public openAttributesModal() {
    this.modalRef = this.modalService.show(AttributesDialogComponent, {
      class: "large-dialog-width"
    });
  }

  public selectProductForReceipt(product) {
    this.receiptCoreService.addProductToReceipt(product);
  }
  public scrollto(el: Element) {
    const top =
      el.getBoundingClientRect().top + document.documentElement.scrollTop;
    window.scroll(0, top);
  }
}
