import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateFormModalComponent} from './components/create-form-modal/create-form-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-ui';

  constructor(private modalService: NgbModal) {
  }

  openFormModal() {
    const modalRef = this.modalService.open(CreateFormModalComponent);
    modalRef.componentInstance.id = 11;
    modalRef.componentInstance.name = 'Carlos CP';

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
