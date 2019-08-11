import { Component, OnInit } from "@angular/core";
import { ReceiptCoreService } from "ecommerce-core";
import { UserInfoCoreService } from "ecommerce-core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "ec-review-order",
  templateUrl: "./review-order.component.html",
  styleUrls: ["./review-order.component.scss"]
})
export class ReviewOrderComponent implements OnInit {
  public cardDetails: FormGroup;
  constructor(
    public receiptCoreService: ReceiptCoreService,
    public userInfoCoreService: UserInfoCoreService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.cardDetails = this.fb.group({
      name: [
        `${this.userInfoCoreService.userInfo.firstName} ${
          this.userInfoCoreService.userInfo.lastName
        }`,

        Validators.required
      ],
      cardNumber: ["", [Validators.required, Validators.pattern("[0-9 ]+")]],
      expiry: [
        "",
        [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/g)]
      ],
      cvv: ["", Validators.required]
    });
  }

  public submitCardForm() {
    if (this.userInfoCoreService.userInfo.paymentType === "card") {
      if (this.cardDetails.valid) {
        this.router.navigate(["/home"]);
      }
    } else {
      this.router.navigate(["/home"]);
    }
  }
}
