import { Component, OnInit } from "@angular/core";
import { AttributesCoreService } from "ecommerce-core";
import { ExtendedAttributeGroup } from "fast-food/app/models/extended-attribute-group";
import { ProductAttribute } from "ecommerce-core";
import { BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "ec-attributes-dialog",
  templateUrl: "./attributes-dialog.component.html",
  styleUrls: ["./attributes-dialog.component.scss"]
})
export class AttributesDialogComponent implements OnInit {
  public attributesGroups: ProductAttribute[] = this.attributesCoreService
    .attributesGroup;
  public extendedAttributesGroups: ExtendedAttributeGroup[];
  public noButtonSelected = false;
  public isAttributeFormValid = false;

  constructor(
    public attributesCoreService: AttributesCoreService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.extendedAttributesGroups = this
      .attributesGroups as ExtendedAttributeGroup[];
    this.extendedAttributesGroups[0].isOpen = true;

    // check attribute form  validation after dialog initialization
    this.isAttributeFormValid = this.attributeGroupsFormStatus;
  }

  checkAttribute(attributeIndex, attributeGroupIndex, isMultiSelect): void {
    const currentAttribute = this.extendedAttributesGroups[attributeGroupIndex]
      .attributes[attributeIndex];

    if (isMultiSelect) {
      if (this.noButtonSelected) {
        currentAttribute.isSelected = !currentAttribute.isSelected;
        currentAttribute.selectionState = "no";
      } else {
        currentAttribute.isSelected = !currentAttribute.isSelected;
        currentAttribute.selectionState = "yes";
      }
    } else {
      // deselect all attributes then select it

      // this variable is here for checking if the current attribute that
      // we select here is also checked , deselect it
      let selectedAttributeIndex = null;

      this.extendedAttributesGroups[attributeGroupIndex].attributes.map(
        (item, index) => {
          if (item.isSelected) {
            selectedAttributeIndex = index;
          }
          item.isSelected = false;
        }
      );

      // this is related to 'selectedAttributeIndex' description
      if (selectedAttributeIndex === attributeIndex) {
        currentAttribute.isSelected = false;
      } else {
        currentAttribute.isSelected = true;
      }
    }

    // check attribute group for validating it
    this.modifyAttributeGroupValidation();
    // check attribute validation form after each attribute check or uncheck
    this.isAttributeFormValid = this.attributeGroupsFormStatus;
  }

  // check any attribute group is selected or not using attribute item
  modifyAttributeGroupValidation() {
    this.extendedAttributesGroups.map(group => {
      let isAnyAttributeChecked = false;

      group.attributes.map(attribute => {
        if (attribute.isSelected) {
          group.isValid = true;
          isAnyAttributeChecked = true;
          return;
        }

        // if any attribute have not been selected after yet
        if (!isAnyAttributeChecked) {
          group.isValid = false;
        }
      });
    });
  }

  get attributeGroupsFormStatus() {
    let result = true;
    this.extendedAttributesGroups.map(group => {
      if (!group.isValid) {
        result = false;
      }
    });
    return result;
  }

  goToNextSection(groupIndex) {
    this.extendedAttributesGroups[groupIndex].isOpen = false;
    this.extendedAttributesGroups[groupIndex + 1].isOpen = true;
    this.noButtonSelected = false;
  }

  addAttributes() {
    this.attributesCoreService.addAttributesToOrder(
      this.extendedAttributesGroups
    );
    this.clearExtendedAttributesGroupArray();
  }

  clearExtendedAttributesGroupArray() {
    // only for fake data - should be removed
    this.extendedAttributesGroups.map(group => {
      group.isOpen = false;
      group.isValid = false;
    });
  }
}
