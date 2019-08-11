import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserInfoCoreService } from "ecommerce-core";
import { Router } from "@angular/router";
import { IfStmt } from "@angular/compiler";
@Component({
  selector: "ec-order-detail-register",
  templateUrl: "./order-detail-register.component.html",
  styleUrls: ["./order-detail-register.component.scss"]
})
export class OrderDetailRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public userInfoCoreService: UserInfoCoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      collectType: [
        this.userInfoCoreService.userInfo.collectType,
        Validators.required
      ],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      doorNumber: ["", Validators.required],
      postcode: ["", Validators.required],
      voucherCode: [""],
      email: ["", [Validators.email]],
      addressLine1: ["", Validators.required],
      addressLine2: [""],
      addressLine3: [""],
      telephoneNumber: [
        "",
        [Validators.required, Validators.pattern("[0-9]+")]
      ],
      paymentType: ["card", Validators.required],
      collectTime: ["", Validators.required]
    });
  }

  public submitRegisterForm() {
    if (this.registerForm.valid) {
      this.userInfoCoreService.userInfo = this.registerForm.value;
      this.router.navigate(["/review-order"]);
    }
  }
}
