import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ec-action-button",
  templateUrl: "./action-button.component.html",
  styleUrls: ["./action-button.component.scss"]
})
export class ActionButtonComponent implements OnInit {
  @Input() public gradient: string;
  @Input() public buttonRoute: string;
  @Input() public size: string;
  @Input() public styles: {};
  @Input() public classNames: string;
  @Input() public maxWidthOnXS: boolean;
  constructor() {}

  ngOnInit() {}
}
