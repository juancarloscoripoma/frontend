import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ClientsModel} from '../../shared/model/clients-model';


@Component({
  selector: 'app-create-form-modal',
  templateUrl: './create-form-modal.component.html',
  styleUrls: ['./create-form-modal.component.scss']
})
export class CreateFormModalComponent implements OnInit {


  id: number;
  name: string;
  myForm: FormGroup;
  clientsModel: ClientsModel = new ClientsModel();

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    // debugger
    console.log(new Date().getTime() + ' ' + this.name + ' ' + this.id );

  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
