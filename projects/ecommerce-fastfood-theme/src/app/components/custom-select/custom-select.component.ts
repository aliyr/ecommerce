import { Component, OnInit, Input } from "@angular/core";
import { FormControl, ControlContainer } from "@angular/forms";

@Component({
  selector: "ec-custom-select",
  templateUrl: "./custom-select.component.html",
  styleUrls: ["./custom-select.component.scss"]
})
export class CustomSelectComponent implements OnInit {
  @Input() public datas: string[];
  @Input() private controlName: string;
  control: FormControl;
  public selectedOption: string;
  public isSelectOpen: boolean;
  private defaultValue: string;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.isSelectOpen = false;
    this.datas = ["1", "2", "3"];
    this.selectedOption = this.datas[0];
    this.control = this.getFormControl;
    this.defaultValue = this.datas[0];
    this.control.setValue(this.defaultValue);
  }
  private get getFormControl() {
    return this.controlContainer.control.get(this.controlName) as FormControl;
  }

  public openClose() {
    // input blur event triggers before you get to select a value
    // in order to fix the problem settimeout is used in this code
    if (this.isSelectOpen) {
      setTimeout(() => {
        this.isSelectOpen = !this.isSelectOpen;
      }, 200);
    } else {
      this.isSelectOpen = !this.isSelectOpen;
    }
  }
  public selectData(data: string) {
    this.selectedOption = data;
    this.control.setValue(this.selectedOption);
  }
}
