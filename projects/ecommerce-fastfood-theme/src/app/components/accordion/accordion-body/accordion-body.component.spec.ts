import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccourdionBodyComponent } from "./accordion-body.component";

describe("AccourdionBodyComponent", () => {
  let component: AccourdionBodyComponent;
  let fixture: ComponentFixture<AccourdionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccourdionBodyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccourdionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
