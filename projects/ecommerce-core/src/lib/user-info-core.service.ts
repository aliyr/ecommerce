import { Injectable } from "@angular/core";
import { UserInfo } from "../lib/models/user-Info";
@Injectable({
  providedIn: "root"
})
export class UserInfoCoreService {
  userInfo: UserInfo;
  constructor() {
    this.userInfo = {
      collectType: null,
      firstName: null,
      lastName: null,
      doorNumber: null,
      postcode: null,
      voucherCode: null,
      email: null,
      addressLine1: null,
      addressLine2: null,
      addressLine3: null,
      telephoneNumber: null,
      paymentType: null,
      collectTime: null
    };
  }
}
