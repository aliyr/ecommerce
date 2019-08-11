import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit
} from "@angular/core";

@Directive({
  selector: "[ecToggler]"
})
export class TogglerDirective implements AfterViewInit {
  @Input() public target: HTMLDivElement;

  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.target.hidden = true;
  }
  @HostListener("click") onMouseClick() {
    this.target.hidden = !this.target.hidden;
  }
}
