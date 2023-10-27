import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalChildComponent } from './modal-child/modal-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(ModalChildComponent);
    modalRef.result.then(data => {
      console.log(data);

    });
  }
}
