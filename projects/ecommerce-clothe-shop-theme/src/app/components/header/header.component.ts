import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "ec-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public isOnHomePage: boolean;
  constructor(private router: Router) {
    this.isOnHomePage = false;
  }

  ngOnInit() {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (this.router.url === "/home") {
          this.isOnHomePage = true;
        }
      }
    });
  }
}
