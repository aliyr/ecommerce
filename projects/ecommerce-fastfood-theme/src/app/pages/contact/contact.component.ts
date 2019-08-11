import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ec-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  public contactUsForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      name: ["", Validators.required],
      telephone: ["", [Validators.required, Validators.pattern("[0-9]+")]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required]
    });
  }
  public submitForm() {
    if (this.contactUsForm.valid) {
      console.log(this.contactUsForm);
    }
  }
}
