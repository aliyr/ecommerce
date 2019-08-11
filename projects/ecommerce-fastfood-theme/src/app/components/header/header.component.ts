import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { PostcodeDialogComponent } from "fast-food/app/components/postcode-dialog/postcode-dialog.component";
import { ReceiptCoreService, UserInfoCoreService } from "ecommerce-core";
import { Router } from "@angular/router";
@Component({
  selector: "ec-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public orderItemsCount = 2;
  public modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    public receiptCoreService: ReceiptCoreService,
    public userInfoCoreService: UserInfoCoreService,
    private router: Router
  ) {}

  ngOnInit() {}
  shopCart() {
    if (this.userInfoCoreService.userInfo.firstName) {
      this.router.navigate(["/review-order"]);
    } else {
      this.router.navigate(["/register-detail"]);
    }
  }
  openModal() {
    this.modalRef = this.modalService.show(PostcodeDialogComponent, {
      class: "medium-dialog-width"
    });
    this.modalRef.content.closeBtnName = "close-button";
  }
}
