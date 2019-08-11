import { Component, OnInit } from "@angular/core";
import { ReceiptCoreService } from "ecommerce-core";
import { UserInfoCoreService } from "ecommerce-core";

@Component({
  selector: "ec-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"]
})
export class ReceiptComponent implements OnInit {
  constructor(
    public receiptCoreService: ReceiptCoreService,
    public userInfoCoreService: UserInfoCoreService
  ) {}

  ngOnInit() {
    this.userInfoCoreService.userInfo.collectType = "delivery";
  }
}
