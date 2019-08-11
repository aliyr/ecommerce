import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardNumber"
})
export class CardNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  }
}
