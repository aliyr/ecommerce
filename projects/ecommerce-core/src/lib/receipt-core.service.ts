import { Injectable } from "@angular/core";
import { Receipt } from "./models/receipt";
import { Product } from "./models/product";

@Injectable({
  providedIn: "root"
})
export class ReceiptCoreService {
  public receipt: Receipt = {
    takeaway: "delivery",
    currency: "GBP",
    deliveryCharge: 5.5,
    orderItems: [
      {
        product: {
          name: '8" margarita',
          currency: "GBP",
          orderNo: 31,
          price: 4.54
        },
        paidAttributes: [
          {
            name: "ketchup",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          },
          {
            name: "ketchup hot mega",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          },
          {
            name: "ketchup hot mega super deluxe",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          }
        ],
        noAttributes: [
          {
            name: "beaf",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          },
          {
            name: "lamb mega super deluxe",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          }
        ]
      },
      {
        product: {
          name: '12" Pizza peperoni super',
          currency: "GBP",
          orderNo: 31,
          price: 2.3
        },
        paidAttributes: [
          {
            name: "ketchup",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          },
          {
            name: "ketchup hot mega super deluxe",
            currency: "GBP",
            price: 0.8,
            isSelected: false,
            selectionState: ""
          }
        ]
      },
      {
        product: {
          name: "Roast beaf",
          currency: "GBP",
          orderNo: 31,
          price: 12.5
        },
        noAttributes: [
          {
            name: "Hot souse",
            currency: "GBP",
            price: 0.2,
            isSelected: false,
            selectionState: ""
          },
          {
            name: "lamb mega super deluxe",
            currency: "GBP",
            price: 0.3,
            isSelected: false,
            selectionState: ""
          }
        ]
      }
    ],
    subTotal: 32.5,
    total: 38,
    note: ""
  };

  constructor() {}

  public removeOrderItem(index): void {
    this.receipt.orderItems = this.receipt.orderItems.filter(
      (item, i) => i !== index
    );
  }

  public addProductToReceipt(product: Product) {
    this.receipt.orderItems.push({
      product,
      paidAttributes: [],
      noAttributes: []
    });
  }
}
