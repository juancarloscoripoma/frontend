import {Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface ConfirmModel {
  DocumentSelected: any;
  AplicationSelected: any;
  modeCancel: string;
  appReviewActivity?: any;
  window?: any;
  TypeFinding?: any;
  partyRole?: any;
  findingType?: any;
}

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  modeCancel: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
