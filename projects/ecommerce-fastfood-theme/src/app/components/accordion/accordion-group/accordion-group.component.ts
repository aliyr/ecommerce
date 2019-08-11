import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

const ANIMATION_TIME = 0.3;

@Component({
  selector: "ec-accordion-group",
  templateUrl: "./accordion-group.component.html",
  styleUrls: ["./accordion-group.component.css"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          minHeight: "0px"
        })
      ),
      state(
        "closed",
        style({
          height: "0"
        })
      ),
      transition("open => closed", [animate(`${ANIMATION_TIME}s`)]),
      transition("closed => open", [animate(`${ANIMATION_TIME}s`)])
    ])
  ]
})
export class AccordionGroupComponent implements OnInit, OnChanges {
  @Input() public accordionState: boolean;
  @Output() public accordionStateChange: EventEmitter<boolean>;
  @Output() public accordionFullyOpened: EventEmitter<ElementRef>;
  constructor(private element: ElementRef) {
    this.accordionState = false;
    this.accordionStateChange = new EventEmitter();
    this.accordionFullyOpened = new EventEmitter();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.accordionState) {
    }
  }

  animationDone($event) {
    if ($event.toState === "open") {
      this.accordionFullyOpened.emit(this.element.nativeElement);
    }
  }

  public toggleBody() {
    this.accordionState = !this.accordionState;
    this.accordionStateChange.emit(this.accordionState);
  }
}
