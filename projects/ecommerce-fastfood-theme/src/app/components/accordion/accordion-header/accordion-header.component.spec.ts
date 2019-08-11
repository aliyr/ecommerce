import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccourdionHeaderComponent } from "./accordion-header.component";

describe("AccourdionHeaderComponent", () => {
  let component: AccourdionHeaderComponent;
  let fixture: ComponentFixture<AccourdionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccourdionHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccourdionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
