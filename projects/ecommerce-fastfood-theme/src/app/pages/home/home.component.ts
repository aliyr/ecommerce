import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {PostcodeDialogComponent} from 'fast-food/app/components/postcode-dialog/postcode-dialog.component';

@Component({
  selector: 'ec-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  openModal() {
    this.modalRef = this.modalService.show(PostcodeDialogComponent, {class: 'medium-dialog-width'});
    this.modalRef.content.closeBtnName = 'close-button';
  }

}
