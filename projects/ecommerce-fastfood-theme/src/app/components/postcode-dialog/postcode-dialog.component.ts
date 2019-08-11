import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: "ec-postcode-dialog",
  templateUrl: "./postcode-dialog.component.html",
  styleUrls: ["./postcode-dialog.component.scss"]
})
export class PostcodeDialogComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private router: Router) {}
  ngOnInit() {}
  public checkPostCode() {
    this.bsModalRef.hide();
    this.router.navigate(["order"]);
  }
}
