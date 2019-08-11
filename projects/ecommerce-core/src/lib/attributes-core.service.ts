import { Injectable } from "@angular/core";
import { ProductAttribute } from "./models/product-attribute";
import { ReceiptCoreService } from "./receipt-core.service";

@Injectable({
  providedIn: "root"
})
export class AttributesCoreService {
  public attributesGroup: ProductAttribute[] = [
    {
      title: "Beaf",
      multiSelect: false,
      attributes: [
        {
          name: "ketchup",
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
      ]
    },
    {
      title: "Sauce",
      multiSelect: true,
      attributes: [
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
      title: "Beaf",
      multiSelect: true,
      attributes: [
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
      ]
    },
    {
      title: "Sauce",
      multiSelect: false,
      attributes: [
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
    }
  ];

  constructor(private receiptCoreService: ReceiptCoreService) {}

  addAttributesToOrder(attributeGroups: ProductAttribute[]) {
    attributeGroups.map(group => {
      group.attributes.map(attribute => {
        if (attribute.isSelected) {
          const orderItemsLength = this.receiptCoreService.receipt.orderItems
            .length;
          const attributeSelectionType = attribute.selectionState;

          if (attributeSelectionType === "no") {
            this.receiptCoreService.receipt.orderItems[
              orderItemsLength - 1
            ].noAttributes.push(attribute);
          } else if (
            attributeSelectionType === "yes" ||
            attributeSelectionType === ""
          ) {
            this.receiptCoreService.receipt.orderItems[
              orderItemsLength - 1
            ].paidAttributes.push(attribute);
          }
        }
      });
    });

    this.clearAttributesGroupArray();
  }

  clearAttributesGroupArray() {
    // only for fake data - should be removed
    this.attributesGroup.map(group => {
      group.attributes.map(attribute => {
        attribute.selectionState = "";
        attribute.isSelected = false;
      });
    });
  }
}
